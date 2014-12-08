var gulp = require('gulp'),
    gutil = require('gulp-util'),
    peg = require('gulp-peg');

gulp.task('default', function() {
    return gulp.src('lib/parser.peg')
        .pipe(peg())
        .on('error', gutil.log)
        .pipe(gulp.dest('./built'));
});
