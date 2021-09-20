const mainRoute = require('./main');
const userRouter = require('./user');

const routes = (app) => {
  app.use('/', mainRoute());
  app.use('/api', userRouter());

  app.use((err, req, res, next) => {
    next(err);
  });
};

module.exports = routes;
