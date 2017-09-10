//此插件依赖jquery
define(['jquery'],function($){
	//设置随机背景的方法
	var setStyle = function(dom){
		var r = Math.floor(Math.random()*10000000) % 256;
		var g = Math.floor(Math.random()*10000000) % 256;
		var b = Math.floor(Math.random()*10000000) % 256;
		$(dom).css('background-color','rgb('+r+','+g+','+b+')');
	}
	//设置闪烁的方法
	var blink = function(dom){
		setInterval(function(){
			$(dom).fadeIn('fast').fadeOut('fast');
		},500);
	}
	//设置滚动到dom1 让dom2变固定定位的方法
	var toFixed = function(dom1,dom2){
		$(document).scroll(function(){
			if($(document).scrollTop() >= $(dom1).offset().top){
				$(dom2).css('position','fixed');
			}else{
				$(dom2).css("position",'static');
			}
		})
	}
	//设置滚动到dom1，让dom2出现的方法
	var showbutton = function(dom1,dom2){
		$(document).scroll(function(){
			if($(document).scrollTop() >= $(dom1).offset().top){
				$(dom2).css('display','block');
			}else{
				$(dom2).css('display','none');
			}
		})
	}
	return {
		setStyle:setStyle,
		blink:blink,
		toFixed:toFixed,
		showbutton:showbutton
	}
})