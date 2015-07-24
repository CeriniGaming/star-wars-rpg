import path from 'path';
import fsp from 'fs-promise';
import {transform} from 'babel-core';
import outputFileSync from 'output-file-sync';

export function buildContent(content, filename, destination, babelOptions={}) {
  babelOptions.filename = filename;
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, {encoding: 'utf8'});
}

export function buildFile(filename, destination, babelOptions={}) {
  const ext = path.extname(filename);
  const outputPath = path.join(destination, path.basename(filename));
  if (ext === '.js') {
    return fsp.readFile(filename, {encoding: 'utf8'})
      .then(content => buildContent(content, filename, outputPath, babelOptions));
  } else if (ext === '.jade') {
    return fsp.readFile(filename, {encoding: 'utf8'})
      .then(content => outputFileSync(outputPath, content, {encoding: 'utf8'}));
  }
}

export function buildFolder(folderPath, destination, babelOptions={}, firstFolder=true) {
  return fsp.stat(folderPath)
    .then(stat => {
      if (stat.isFile()) {
        return buildFile(folderPath, destination, babelOptions);
      } else if (stat.isDirectory()) {
        const outputPath = firstFolder ? destination : path.join(destination, path.basename(folderPath));
        return fsp.readdir(folderPath)
          .then(files => files.map(file => path.join(folderPath, file)))
          .then(paths => Promise.all(
            paths.map(path => buildFolder(path, outputPath, babelOptions, false)))
          )
      }
    });
}
