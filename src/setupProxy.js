const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://workouts-api-unsi.onrender.com",
      changeOrigin: true,
    })
  );
};
