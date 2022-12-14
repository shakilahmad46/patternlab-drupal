const gulp = require('gulp');

const config = require('./gulp-tasks/config');

const tasks = [
  'clean',
  'scss',
  'ts',
  'svg',
  'prettier',
  'lint',
  'images','inject',
'patternlab',
  'default',
  'watch',
];

tasks.forEach((task) => {
  const t = require(`./gulp-tasks/${task}`);
  t(gulp, config);
});
