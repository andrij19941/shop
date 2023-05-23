var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var cssMinify = require('gulp-css-minify');
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

gulp.task('libs', function() {
  return gulp.src(['libs/**/*.*'])
    .pipe(gulp.dest('dist/libs/'))
});

gulp.task('scss', function() {
  return gulp.src(['scss/styles.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(cssMinify())
  .pipe(gulp.dest('dist/css/'));
});

// gulp.task('js', function() {
//   return gulp.src([
//     'libs/jquery/jquery.min.js',
//     'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
//     'js/catalog.js',
//     'js/cart.js',
//     'js/checkout.js'
//   ])
//     .pipe(sourcemaps.init())
//     .pipe(concat('all.js'))
//     .pipe(sourcemaps.write())
//     .pipe(minify())
//     .pipe(gulp.dest('dist/js/'));
// });

gulp.task('img', function() {
  return gulp.src(['img/*.*'])
    .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', function() {
  gulp.watch('*.html', gulp.series('html'));
  gulp.watch('blocks/*.html', gulp.series('html'));
  gulp.watch('scss/*.scss', gulp.series('scss'));
  // gulp.watch('js/*.js', gulp.series('js'));
  gulp.watch('img/*.*', gulp.series('img'));
  gulp.watch('libs/**/*.*', gulp.series('libs'));
});

exports.default = gulp.series( gulp.parallel('html', 'scss', 'img', 'libs'), 'watch');