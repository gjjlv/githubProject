	window.onload=function(){
		waterfall('main','box');
		//模拟后台传过来的数据,dataInt是一个对象，dataInt.data是数组
		var dataInt={"data":[{"src":"img7.png"},{"src":"img8.png"},{"src":"img9.png"},{"src":"img10.png"},{"src":"img11.png"},{"src":"img12.png"},{"src":"img13.png"},{"src":"img14.png"},{"src":"img15.png"},{"src":"img16.png"},{"src":"img17.png"},{"src":"img18.png"},{"src":"img19.png"},{"src":"img20.png"}]};
		window.onscroll=function(){
	     if(checkScrollSlide){
				//将数据渲染到页面尾部
				var oParent=document.getElementById('main');
				for(var i=0;i<dataInt.data.length;i++){
					var oBox=document.createElement('div');
					oBox.className='box';
					oParent.appendChild(oBox);
					var oPic=document.createElement('div');
					oPic.className='pic';
					oBox.appendChild(oPic);
					var oImg=document.createElement('img');
					oImg.src="images/"+dataInt.data[i].src;
					oPic.appendChild(oImg);
			 }
			 waterfall('main','box');
			}
		}
	}


	function waterfall(parent,box){
		//取父元素main
		var oParent=document.getElementById(parent);
	    //取到所有class为box的元素
	    var oBoxs=getByClass(oParent,box);
	    //计算整个页面显示的列数(页面宽度/box盒子的宽度)
	    var oBoxsw=oBoxs[0].offsetWidth;
	    var cols=Math.floor(document.documentElement.clientWidth/oBoxsw);
	    //设置main宽度，样式居中
	    oParent.style.cssText='width:'+oBoxsw*cols+'px;margin:0 auto';
	    var hArr=[];//每一列盒子的高度和
	    for(var i=0;i<oBoxs.length;i++){
	    	if(i<cols){
	    		hArr.push(oBoxs[i].offsetHeight);
	    	}else{
	    		var minH=Math.min.apply(null,hArr);
	    		var index=getMinhIndex(hArr,minH);
	    		oBoxs[i].style.position='absolute';
	    		oBoxs[i].style.top=minH+'px';
	    		oBoxs[i].style.left=index*oBoxsw+'px';
	    		hArr[index]=hArr[index]+oBoxs[i].offsetHeight;
	    	}
	    }
	}


	//封装根据clss获取元素的方法
	function getByClass(parent,clsName){
		var boxArr=new Array(),//用来存储获取到的所有class为box的元素
		oElements=parent.getElementsByTagName('*');
		for(var i=0;i<oElements.length;i++){
			if(oElements[i].className==clsName){
                boxArr.push(oElements[i]);
			}
		}
		return boxArr;
	}



	//获取高度最小盒子的index
	function getMinhIndex(arr,val){
		for(var i in arr){
			if(arr[i]==val){
				return i;
			}
		}
	}


	
	//检测是否具备了滚动条加载数据库的条件
	function checkScrollSlide(){
		var oParent=document.getElementById('main');
		var oBoxs=getByClass(oParent,'box');
		var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var height=document.documentElement.clientHeight||document.body.clientHeight;
		return (lastBoxH<scrollTop+height)?true:false;
	}
