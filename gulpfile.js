var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('test', function() {
    return gulp.src('./src/test/*.js').pipe(mocha());
});

gulp.task('lint', function() {
    return gulp.src('./src/test/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});