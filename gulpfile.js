var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpUtil = require('gulp-util');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var removeLogs = require('gulp-removelogs');
var livereload = require('gulp-livereload');

var src = 'public/src';
var dist = 'public/dist';

var path = {
	js: src + '/js/*.js',
	scss: src + '/scss/*.scss'
};

gulp.task('connect', function() {
	connect.server({
		port:8000,
		livereload:true
	});
});

gulp.task('combine-js', function () {
	return gulp.src([path.js])
		.pipe(concat('script.js'))
		.pipe(removeLogs())
		.pipe(uglify().on('error', gulpUtil.log))
		.pipe(gulp.dest(dist+'/js'));
});

gulp.task('sass', function(){
	return gulp.src(path.scss)
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(path.js, ['combine-js']);
	gulp.watch(path.scss, ['sass']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});

gulp.task('default',['connect', 'combine-js', 'sass', 'watch']);