require.config({
	paths:{
		'jquery':'../bower_components/jquery/dist/jquery.min',
		'bootstrap':'../bower_components/bootstrap/dist/js/bootstrap.min',
		'index':'index'
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		}
	}
})

require(['jquery','bootstrap','index'],function($,boot,setStyle){
	setStyle.setStyle('.box');
	$(".firstbtn").click(function(){
		$("#myModal").modal('show');
	});
	setStyle.blink('.newbtn');
	setStyle.toFixed('.box','.container h3');
	setStyle.showbutton('.box4','.fixedbutton');
})