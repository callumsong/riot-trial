var gulp = require('gulp'),
    riot = require('gulp-riot'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    server = require('gulp-express');

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

gulp.task('riot-client-dev', function() {
  gulp.src('./riot-tags/**/*.tag')
      .pipe(riot({
        compact:true
      }))
      .pipe(concat('tags.js'))
      .pipe(gulp.dest('./public'));
});

gulp.task('riot', function() {
  gulp.run('riot-server', 'riot-client');
});

gulp.task('server', function() {
  server.run(['server.js']);
});

gulp.task('dev', function() {
  gulp.run('riot-server', 'riot-client-dev', 'server');
});

gulp.task('default', ['riot', 'server']);