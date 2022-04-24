const service = require('../service/study.service')
const extractSort = require('../utils/extractSort')
class StudyController {
  // 获取笔记分类列表
  async getSortList(req, res, next) {
    const result = await service.getSortList()
    const newArray = extractSort(result[0])
    res.json({
      data: {
        sortArray: newArray
      },
      meta: {
        message: '获取分类列表成功！',
        status: 200
      }
    })
  }
  // 上传笔记接口
  uploadNote(req, res,next) {
    const noteMessage = req.body
    const result = service.uploadNote(noteMessage)
    result.then(resolve => {
      return res.json({
        data: 0,
        meta: {
          message: "上传成功！",
          status: 200
        }
      })
    }).catch(error => {
      return res.json({
        data: 1,
        meta: {
          message: "上传失败",
          status: 200
        }
      })
    })
  }

}


module.exports = new StudyController();