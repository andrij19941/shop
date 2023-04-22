var gulp = require('gulp');
const fileinclude = require('gulp-file-include');



gulp.task('html', function() {

  gulp.src(['*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'))
  
});

// gulp.task('watch', function() {
//   gulp.watch('*.html', ['html']);
// });

// gulp.task('default', ['watch']);
