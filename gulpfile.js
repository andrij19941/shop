var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var cssMinify = require('gulp-css-minify');
var less = require('gulp-less');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));



gulp.task('html', function() {
  return gulp.src(['*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'))
});


gulp.task('css', function() {
  return gulp.src(['css/*.css'])
  .pipe(cssMinify())
  .pipe(less())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function() {
  return gulp.src([
    'js/jquery-3.6.4.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'js/catalog.js',
    'js/cart.js',
    'js/checkout.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(minify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('img', function() {
  return gulp.src(['img/*.*'])
    .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', function() {
  gulp.watch('*.html', gulp.series('html'));
  gulp.watch('html/*.html', gulp.series('html'));
  gulp.watch('css/*.css', gulp.series('css'));
  gulp.watch('js/*.js', gulp.series('js'));
  gulp.watch('img/*.*', gulp.series('img'));
});

exports.default = gulp.series( gulp.parallel('html', 'css', 'js', 'img'), 'watch');