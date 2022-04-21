const service = require('../service/comment.service')

class CommentController {
  // 发表评论
  create(req, res, next) {
    const nameComment = req.body.name
    const createTime = req.body.createTime
    const note = req.body.note
    service.create(nameComment, createTime, note).then(resolve => {
      console.log("评论存入成功");
    }).catch(err => {
      console.log("评论存入失败：", err);
    })
    res.end("发表成功")
  }
  // 点赞
  giveLike(req, res, next) {
    // 获取是点赞还是取消点赞的信息，true为点赞， false为取消点赞
    let ifLike = req.body.ifTrue
    let commentId = req.body.commentId
    const result = service.giveLike(commentId, ifLike)

    res.end(`${ifLike ? '点赞成功' : '取消点赞'}`)

  }
  // 获取最新的10条评论信息
  async getAllComments(req, res, next) {
    // 注意这里返回的是一个promise，所以使用async与await
    const result = await service.getAllComments()
    // 以json格式返回查询信息
    res.json(result)
  }
}

module.exports = new CommentController();