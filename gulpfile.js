'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./style/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./style/**/*.sass', ['sass']);
});

gulp.task('default', function() {
    gulp.watch('./style/**/*.sass', ['sass']);
});