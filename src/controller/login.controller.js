
class LoginController {
  // 登录
  login(req, res, next) {
    const {name, password} = req.body
    if (name === 'taojx' && password === '123456') {
      return res.end("登录成功")
    }
    res.end('密码错误')

  }
}

module.exports = new LoginController();