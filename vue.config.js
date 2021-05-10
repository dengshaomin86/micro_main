module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      //   args[0].title = 'micro_01';
      return args;
    });
  }
};
