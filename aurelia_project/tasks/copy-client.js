import gulp from 'gulp';

export default function copy() {
  return gulp.src(['index.html', 'scripts/**/*'], { base:'.' })
    .pipe(gulp.dest('.tmp/public'));
}
