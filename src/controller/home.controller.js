class HomeController {
  async getDirectory(req, res, next) {
    res.json([
      { path: "introduce", class: "iconfont icon-user", text: "自我介绍" },
      { path: "resume", class: "iconfont icon-namecard", text: "简历" },
      { path: "demo", class: "iconfont icon-form-fill", text: "练习项目" },
      { path: "study", class: "iconfont icon-suggest", text: "学习过程" },
      { path: "blog", class: "iconfont icon-3column", text: "博客介绍" },
      // { path: "contact", class: "iconfont icon-lianjie", text: "联系" },
    ])
  }
}


module.exports = new HomeController();