const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const Dotenv = require("dotenv-webpack");

require("dotenv").config();

module.exports =
  withImages(
    withCSS(
      withSass({
        webpack: (config) => {
          const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
          }, {});

          config.module.exprContextCritical = false;
          config.plugins.push(new Dotenv({ silent: true }));
          // config.plugins.push(new webpack.DefinePlugin(env));

          return config;
        },
      })
    )
  );
