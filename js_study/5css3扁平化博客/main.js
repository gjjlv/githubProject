$(function(){
	'use strict';
	var sidebar=$('#sidebar');//菜单模块
	var mask=$('.mask');//遮罩mask
	var sidebar_trigger=$('#sidebar_trigger');//触发菜单的li
	var backButton=$('.back-to-top');//返回顶部

	function showSideBar(){//显示菜单和遮罩
		mask.fadeIn();
		// sidebar.animate({'right':0});
		sidebar.css('right',0);
	}

	function hideSideBar(){//隐藏菜单和遮罩
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
		sidebar_trigger.removeClass('active');
		var loHref=window.location.href;
		var ansow='article';
		// var ansow=loHref.slice(-13,-1);
		// if(ansow=='article.html'){
		// 	$('nav li').eq(1).addClass('active');
		// }else{
		// 	$('nav li').eq(0).addClass('active');
		// }
		if(loHref.match(ansow)){
			$('nav li').eq(1).addClass('active');
		}else{
			$('nav li').eq(0).addClass('active');
		}
	}

	sidebar_trigger.on('click',showSideBar);

	mask.on('click',hideSideBar);

	backButton.on('click',function(){
		$('html,body').animate({scrollTop:0},800);
	});
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height()){
			backButton.fadeIn();
		}else{
			backButton.fadeOut();
		}
	});
	// $(window).trigger('scroll');页面一刷新，就触发scroll

$('nav li').click(function(){
  // $(this).css('border-bottom','2px solid #fff');
  // $(this).siblings().css('border-bottom','none');
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

})

})