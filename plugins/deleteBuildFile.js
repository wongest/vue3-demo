/**
 * 一个删除dist文件的目录
 */
const fs = require('fs');
const path = require('path');

function deleteFolder(filePath) {
  fs.stat(filePath, (err, stat) => {
    if (stat.isFile()) {
      fs.rm(filePath, err => console.log(err))
    } else {
      const files = fs.readdirSync(filePath);
      files.forEach(p => {
        deleteFolder(path.resolve(filePath, p))
      })
    }
  });
}

class DeleteBuildFile {
  constructor(options = {}) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.run.tap('DeleteBuildFile', (compilation) => {
      const outputPath = compilation.options.output.path;
      console.log('delete: ', outputPath);
      deleteFolder(outputPath);
    })
  }
}

module.exports = DeleteBuildFile;