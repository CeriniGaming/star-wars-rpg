import fsp from 'fs-promise';
import {exec} from 'child-process-promise';
import {srcRoot, libRoot} from '../constants';
import {buildFolder} from '../buildBabel';

export default function buildLib() {
  return exec(`rimraf ${libRoot}`)
    .then(() => fsp.mkdir(libRoot))
    .then(() => buildFolder(srcRoot, libRoot));
}
