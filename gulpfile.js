var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uncss = require('gulp-uncss');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');

gulp.task('default', function() {
	gulp.start('sass');
});

gulp.task('sass', function() {
	gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(uncss({
			html: ['./src/*.html']
		}))
		.pipe(nano())
		.pipe(gulp.dest('./dist/css'));
});