const mainRoute = require('./main');

const routes = (app) => {
  app.use('/', mainRoute());

  app.use((err, req, res, next) => {
    next(err);
  });
};

module.exports = routes;
