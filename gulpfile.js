var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  vinylSourceStream = require('vinyl-source-stream'),
  browserify = require('browserify'),
  reactify = require('reactify');

gulp.task('browserify', function () {
  return browserify({
      entries: './src/js/app.js',
      debug: true
    })
    .transform(reactify)
    .bundle()
    // .pipe(sourcemaps.init({
    //   loadMaps: true
    // }))
    // .pipe(sourcemaps.write('./'))
    .pipe(vinylSourceStream('app.js'))
    .pipe(gulp.dest('./dist/js/'));
});
