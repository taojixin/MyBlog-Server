const fs = require('fs')
const path = require('path')
const md = require('markdown-it')();

// 通过路径获取文件进行转换
module.exports = function convert(parentPath, fileName) {
  let markdowPath = path.join(parentPath, fileName)
  let result;
  fs.readFile(markdowPath, 'utf-8', (err, data) => {
    if (err) return;
    else {
      result = md.render(data)
    }
  })
}
