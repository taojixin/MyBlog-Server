const fs = require('fs')


class FileController {
  // 保存图片相关信息
  async saveDemoImgInfo(req, res, next) {
    // 获取图像相关信息
    console.log(req.file);
    const { mimetype, filename, size} = req.file
    // 将图像信息数据保存到数据库中

  }
  // 返回图片
  demoImgInfo(req, res, next) {
    const imgs = fs.createReadStream('./uploads/demoimg/c63444746f61e7818876966f350c79aa')

    // res.format(imgs)
    imgs.pipe(res)

  }
}


module.exports = new FileController();