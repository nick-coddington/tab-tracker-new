const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')


module.exports = (app) => {
  app.post('/registration',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
  
  app.get('/songs',
    SongsController.index)
  
  app.post('/songs',
    SongsController.post)
}


