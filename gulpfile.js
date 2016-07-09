var gulp = require('gulp'),
    riot = require('gulp-riot'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('riot-server', function() {
  gulp.src('./riot-tags/**/*.tag')
      .pipe(riot({
        modular: true,
        compact: true
      }))
      .pipe(concat('tags-server.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

gulp.task('riot-client', function() {
  gulp.src('./riot-tags/**/*.tag')
      .pipe(riot({
        compact:true
      }))
      .pipe(concat('tags.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

gulp.task('riot', function() {
  gulp.run('riot-server', 'riot-client');
});