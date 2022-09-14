import path from "path";

module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.module.rules.push({
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, './src')
        ],
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      })
      return webpackConfig;
    }
  }
};