require("dotenv").config();

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget:
    process.env.APPLICATION_ENVIRONMENT === "development"
      ? undefined
      : "cloudflare-pages",
  server:
    process.env.APPLICATION_ENVIRONMENT === "development"
      ? undefined
      : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "src",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
