'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var cleanCss = require('gulp-clean-css');

gulp.task("combineCss", function() {
	return gulp.src([
			'css/normalize.css',
			'css/foundation.css',
			'css/basics.css'
		])
		.pipe(concatCss("bundle.css"))
		.pipe(gulp.dest('css'));
});

gulp.task("minifyCss", function() {
	return gulp.src("css/bundle.css")
		.pipe(cleanCss())
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest('css'));
});

gulp.task("concatScripts", function() {
	return gulp.src([
		'js/jquery.js',
		'js/foundation.js', 
		'js/foundation.equalizer.js', 
		'js/foundation.reveal.js',
		'js/scripts.js'
		])
	.pipe(concat("app.js"))
	.pipe(gulp.dest('js'))
});

gulp.task("minifyScripts", function(){
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});


gulp.task("default", ["hello"], function(){
	console.log("This is the default task!");
});

