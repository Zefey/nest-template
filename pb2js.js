const fs = require('fs');
const child = require('child_process');

const PATH = `./src/protobuf`; //protobuf文件夹

let ext = {
  readFileList: function (path, filesList) {
    filesList = filesList || [];
    let files = fs.readdirSync(path);
    files.forEach(function (filename) {
      if (fs.statSync(`${path}/${filename}`).isDirectory()) {
        ext.readFileList(`${path}/${filename}`, filesList);
      } else {
        filesList.push({
          path,
          filename,
        });
      }
    });
    return filesList;
  },
  pb2js: function () {
    ext.readFileList(PATH).forEach(function (item) {
      const local = item.filename.indexOf('proto');
      const prefix = item.filename.substring(0, local - 1);
      const suffix = item.filename.substring(local);
      if (suffix === 'proto') {
        child.exec(
          `pbjs -t static-module -w commonjs -o ${PATH}/${prefix}.js ${PATH}/${prefix}.proto`,
        );
        child.exec(`pbts -o ${PATH}/${prefix}.d.ts ${PATH}/${prefix}.js`);
      }
    });
  },
};

ext.pb2js();
