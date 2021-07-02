// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  devServer: {
    watchOptions: {
      ignored: /\.#|node_modules|~$/,
    },
  },
};
