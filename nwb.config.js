module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactTraceChart',
      externals: {
        react: 'React'
      }
    }
  }
}
