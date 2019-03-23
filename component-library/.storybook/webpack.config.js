const path = require("path");

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    url: false,
    localIdentName: '[local]__[hash:base64:5]'
  }
};

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"],
    include: /node_modules/,
  });

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    exclude: /\.module\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  storybookBaseConfig.module.rules.push({
    test: /\.module\.scss$/,
    loaders: ["style-loader",CSSModuleLoader, "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  const fileLoader =  {
    loader: 'file-loader',
    test: /.(svg|gif|eot|woff|ttf)$/,
    options: {
      name: '[path][name].[ext]',
    }
  };

  storybookBaseConfig.module.rules.push(fileLoader);

  // Return the altered config
  return storybookBaseConfig;
};