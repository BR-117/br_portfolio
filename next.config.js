// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/pdf/",
          },
        },
      ],
    });

    return config;
  },
};
