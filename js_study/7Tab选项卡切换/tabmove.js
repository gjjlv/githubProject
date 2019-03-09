function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
// window.onload=function(){//鼠标滑过显示
// 	//获取鼠标滑过或点击的标签和要切换的内容
// 	var titles=$('notice-tit').getElementsByTagName('li');
// 	var divs=$('notice-con').getElementsByTagName('div');
// 	if(titles.length!=divs.length) return;
// 	//遍历titles下所有li
// 	for(var i=0;i<titles.length;i++){
// 		titles[i].id=i;
// 		titles[i].onmouseover=function(){
// 			//清楚多有li上的class
// 			for(var j=0;j<titles.length;j++){
// 				titles[j].className='';
// 				divs[j].style.display='none'; 
// 			}
// 			//设置当前为高亮
// 			this.className='select';
// 			divs[this.id].style.display='block';
// 		}
// 	}
// }
// *********************************************************************************
// window.onload=function(){//鼠标滑过延迟显示
// 	var timer=null;
// 	var lis=$('notice-tit').getElementsByTagName('li');
// 	var divs=$('notice-con').getElementsByTagName('div');
// 	if(lis.length!=divs.length) return;
// 	//遍历所有的页签
// 	for(var i=0;i<lis.length;i++){
// 		lis[i].id=i;
// 		lis[i].onmouseover=function(){
// 			//用taht变量来引用当前滑过的li
// 			var that=this;
// 			//如果存在了准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
// 			if(timer){
// 				clearTimeout(timer);
// 			}
// 			//延迟半秒执行
// 			timer=setTimeout(function(){
// 				for(var j=0;j<lis.length;j++){
// 					lis[j].className='';
// 					divs[j].style.display='none';
// 				}
// 				lis[that.id].className='select';
// 				divs[that.id].style.display='block'
// 			},500);
// 		};
// 	};
// };
//*************************************************************************************
window.onload=tab;
function tab(){
	//当前高亮显示的页签索引
	var index=0;
	var timer=null;
	//获取所有页签和要切换的内容
	var lis=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');
	//遍历每一个页签绑定事件
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id);
		}
		lis[i].onmouseout=function(){
		   timer=setInterval(autoPlay,2000);
		}
	}
	if(timer){
		clearInterval(timer);
	}
	//添加定时器，改变当前高亮的索引
	timer=setInterval(autoPlay,2000);
	function autoPlay(){
		index++;
		if(index>=lis.length){
			index=0
		}
		changeOption(index);
	}
	function changeOption(curIndex){
		for(var j=0;j<lis.length;j++){
			lis[j].className='';
			divs[j].style.display='none';
		}
		lis[curIndex].className='select';
		divs[curIndex].style.display='block';
		index=curIndex;
	}
}