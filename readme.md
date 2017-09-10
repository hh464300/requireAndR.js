#### 根目录下 bower install bootstrap
#### index.html 入口html文件 引入优化后的main.js
#### index.js为自定义的几个jquery插件方法
#### main.js 主文件
#### r.js 优化方案
#### lib/build.js 优化配置文件
	({
	appDir:'./',       /*项目目录*/
	baseUrl:'./',      /*模块相对的路径*/
	dir:'./build',     /*输出路径*/
	fileExclusionRegExp: /^(r|build)\.js$/, /*要排除的文件的正则匹配的表达式*/
	modules:[   /*优化的模块*/
		{name:'index'},
		{name:'main'}
		],
	paths:{
		'jquery':'../bower_components/jquery/dist/jquery.min',
		'bootstrap':'../bower_components/bootstrap/dist/js/bootstrap.min',
		'index':'index'
	},
	shim:{
		bootstrap:{
			deps:['jquery']
		},
		index:{
			deps:['jquery']
		}
	}
})
#### build/   优化后的文件
