module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/merge/my-element/my-element.js',
        ]
      }
    ],
    wrapper: 'src/merge/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Wrapped LitElement Example'
};
