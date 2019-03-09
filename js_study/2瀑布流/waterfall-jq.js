$(window).on('load',function(){
	waterfall();
	var dataInt={"data":[{"src":"img7.png"},{"src":"img8.png"},{"src":"img9.png"},{"src":"img10.png"},{"src":"img11.png"},{"src":"img12.png"},{"src":"img13.png"},{"src":"img14.png"},{"src":"img15.png"},{"src":"img16.png"},{"src":"img17.png"},{"src":"img18.png"},{"src":"img19.png"},{"src":"img20.png"}]};
    $(window).on('scroll',function(){
    	if(checkScrollSlide){
           $.each(dataInt.data,function(key,value){
           	var oBox=$('<div>').addClass('box').appendTo($('#main'));
           	var oPic=$('<div>').addClass('pic').appendTo($(oBox));
           	$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
           })
           waterfall();
    	}
    })
})



function waterfall(){
	var $boxs=$('#main>div');
	var w=$boxs.eq(0).outerWidth();//outerWidth获得的宽包括padding和border
	var cols=Math.floor($(window).width()/w);
	$('#main').width(cols*w).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){//index索引，value遍历的元素
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);//在hArr中最小值minH所在的索引
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})
}

function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;

}