'use strict';
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    peg = require('gulp-peg'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('peg', function() {
    return gulp.src('lib/parser.peg')
        .pipe(peg())
        .on('error', gutil.log)
        .pipe(gulp.dest('./built'));
});

gulp.task('default', ['peg'], function() {
    return browserify('./index.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./built'));
});
