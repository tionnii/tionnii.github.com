var gulp = require('gulp');
//var connect = require('gulp-connect');
var concat = require('gulp-concat');
//var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var inject = require('gulp-inject');
var removeLogs = require('gulp-removelogs');

var src = 'public/src';
var dist = 'public/dist';

var path = {
	js: src + '/**/*.js',
	scss: src + '/scss/*.scss',
	html: src + '/html/*.html'
};

/*
gulp.task('server', function () {
	return gulp.src('')
		.pipe(webserver());
});
*/
/*
gulp.task('connect', function() {
	connect.sever({
		root:'',
		port:8080
	});
});
*/
/*
gulp.task('combine-js', function () {
	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/underscore/underscore-min.js',
		'bower_components/backbone/backbone-min.js',
		path.js,
		src + '/controller/*.js',
		src + '/router/*.js'])
		.pipe(concat('script.js'))
		.pipe(removeLogs())
		.pipe(uglify()) //minify 해서
		.pipe(gulp.dest(dist+'/js'));
});
*/
gulp.task('compile-sass', function(){
	return gulp.src(path.scss)
		.pipe(sass())
		.pipe(gulp.dest(dist + '/css'));
});

gulp.task('compress-html', function(){
	return gulp.src(path.html)
		.pipe(minifyhtml())
		.pipe(gulp.dest(dist + '/html'));
});

gulp.task('inject', function(){
	var target = gulp.src('index.html');
	var sources = gulp.src([dist + '/js/*.js', dist + '/css/*.css']);

	return target.pipe(inject(sources))
		.pipe(gulp.dest(''))

});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(path.js, ['combine-js']);
	gulp.watch(path.scss, ['compile-sass']);
	gulp.watch(path.html, ['compress-html']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});

gulp.task('default',['combine-js','compile-sass','compress-html','inject','watch','server']);