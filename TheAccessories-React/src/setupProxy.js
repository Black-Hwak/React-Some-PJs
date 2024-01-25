// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // You can change this path to match your API endpoint
    createProxyMiddleware({
      target: 'https://fakestoreapi.com',
      changeOrigin: true,
    })
  );
};
