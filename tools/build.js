import 'colors';
import lib from './lib/build';

export default function build(argv) {
  console.log('building'.green + ' lib'.cyan);
  return lib()
    .then(() => console.log('lib built'.green));
}
