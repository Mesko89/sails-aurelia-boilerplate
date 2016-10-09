import gulp from 'gulp';
import transpile from './transpile';
import copyClient from './copy-client';
import processMarkup from './process-markup';
import processCSS from './process-css';
import {build} from 'aurelia-cli';
import project from '../aurelia.json';

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS
  ),
  writeBundles,
  copyClient
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
