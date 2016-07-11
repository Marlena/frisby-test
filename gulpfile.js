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

gulp.task('server', (callback) => {
  spawn('node server.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

gulp.task('spec', (callback) => {
  exec('npm test', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});
