import lib from './lib/build';

export default function build(argv) {
  return lib()
    .then(() => console.log('lib built'));
}
