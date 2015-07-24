import 'colors';
import yargs from 'yargs';
import build from './build';

const {argv} = yargs
  .help('h');

build(argv).catch(err => {
  console.log(err);
  if (err.stack) {
    console.error(err.stack.red);
  } else {
    console.error(err.toString().red);
  }
  process.exit(1);
});
