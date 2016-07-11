const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;
var spawn = require('child_process').spawn;


//https://css-tricks.com/gulp-for-beginners/


gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) //gulp-sass in action
      .pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', ['sass'])
});


gulp.task('server', () => {
  spawn('node', ['server.js'])
});

gulp.task('spawn-spec', (callback) => {
  spawn('./node_modules/jasmine-node/bin/jasmine-node', [spec]);
});

gulp.task('spec', (callback) => {
  exec('./node_modules/jasmine-node/bin/jasmine-node spec', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});