const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://api.igdb.com/v4/",
            changeOrigin: true,
        })
    );
};