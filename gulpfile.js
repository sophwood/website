var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src(FILES)
    .pipe(eslint({}))
    .pipe(eslint.format());
});
