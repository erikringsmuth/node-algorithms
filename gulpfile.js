'use strict';
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    mocha   = require('gulp-mocha');

var codeFiles = [
  '*.js',
  'test/**/*.js'
];
var testFiles = 'test/**/*.js';

gulp.task('test', function () {
  gulp
    .src(testFiles)
    .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('lint', function() {
  gulp
    .src(codeFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.watch(codeFiles, function() {
    gulp.run('test', 'lint');
  });
});

gulp.task('default', ['test', 'lint', 'watch']);
