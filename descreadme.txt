Изменил gulpfile чтобы сборщик rigger() мог собирать файлы .html 
беря куски кода из подпапок

//= parties/part-1.html

изменение в conf.watch.html



было
var conf = {
	src 	: {
		html 	: '*.html',
		styles	: 'scss/**/*.scss',
		js		: 'js/bootstrap.js',
		fonts	: 'fonts/*',
		img		: 'img/*'
	},
	build 	: {
		html 	: '',
		styles	: 'css/',
		js		: 'js/',
		fonts	: 'fonts/',
		img		: 'img/'
	},
	watch 	: {
		html 	: '*.html',
		styles	: 'scss/**/*.scss',
		js		: 'js/**/*.js',
		fonts	: 'fonts/*',
		img		: 'img/*'
	},
};
стало

var conf = {
	src 	: {
		html 	: '*.html',
		styles	: 'scss/**/*.scss',
		js		: 'js/bootstrap.js',
		fonts	: 'fonts/*',
		img		: 'img/*'
	},
	build 	: {
		html 	: '',
		styles	: 'css/',
		js		: 'js/',
		fonts	: 'fonts/',
		img		: 'img/'
	},
	watch 	: {
		html 	: '**/*.html',
		styles	: 'scss/**/*.scss',
		js		: 'js/**/*.js',
		fonts	: 'fonts/*',
		img		: 'img/*'
	},
};