var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default',function() {
  return gutil.log('Gulp is running!');
});

gulp.task('jshint', function() {
  return gulp.src('assets/js/dev/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function() {
  return gulp.src('assets/js/dev/*.js')
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js/dist/'));
})

gulp.task('watch', function() {
  gulp.watch('assets/js/dev/*.js',['jshint']);
  gulp.watch('assets/js/dev/*.js',['build-js']);
});
