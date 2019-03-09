//图片预加载
(function($){//通过$接收jQuery对象
	function PreLoad(imgs,options){//创建构造函数
		this.imgs=(typeof imgs==='string')?[imgs]:imgs;//判断参数imgs是否为字符串
		this.opts=$.extend({},PreLoad.DEFAULTS,options);//后一个（options)覆盖前一个（PreLoad.DEFAULTS）形成一个新对象，返回给opts
		if(this.opts.order==='ordered'){
			this._ordered();
		}else{
			this._unordered();
		}
	};

	PreLoad.DEFAULTS={//没有传递参数设置默认值
		order:'unordered',//默认情况下是无序预加载
		each:null,//每张图片加载完毕后执行
		all:null//所有图片加载完后执行
	};


	PreLoad.prototype._ordered=function(){//有序加载
		var opts=this.opts;
		var imgs=this.imgs;
		var len=imgs.length;
		var count=0;
		function load(){
	 	var imgObj=new Image();//创建img对象
	 	$(imgObj).on('load error',function(){
	 		opts.each&&opts.each(count);
	 		if(count>=len){
	 			//所有图片已经加载完毕
	 			opts.all&&apts.all();
	 		}else{
	 			load();
	 		}
	 		count++;
	 	});
	 	imgObj.src=imgs[count];
	 	console.log(imgObj.src);
	 };
	},

	PreLoad.prototype._unordered=function(){//把无序加载方法写在原型上
		var imgs=this.imgs;
		var opts=this.opts;
		var count=0;
		var len=imgs.length;
	    $.each(imgs,function(i,src){
	    	if(typeof src!='string') return;
	    	var imgObj=new Image();
	    	$(imgObj).on('load error',function(){
	    		opts.each&&opts.each(count);
	    		if(count>=len-1){
	    			opts.all&&opts.all();
	    		}
	    		count++;
	    	});
	    	imgObj.src=src;
	    });
	    $('.btn').on('click',function(){
	    	if($(this).data('control')==='prev'){//上一张
	    		index=Math.max(0,--index);//index先减减再与0比较
	    	}else{//下一张
	    		index=Math.min(len-1,++index);
	    	}
	    	document.title=(index+1)+'/'+len;
	    	$('#img').attr('src',imgs[index]);
	    });

	};
	// $.fn.extend->$('#img').preload()
	// $.extend->$.preload();
	$.extend({
		preload:function(imgs,opts){
			new PreLoad(imgs,opts);
		}
	});

})(jQuery);//传入jQuery对象