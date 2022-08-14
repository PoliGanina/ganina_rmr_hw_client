const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://51.250.65.73/api/v1',
      changeOrigin: true,
    })
  );
};