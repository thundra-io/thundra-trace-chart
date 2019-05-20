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
  },
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/,
      },
      sass: {
        modules: true,
        localIdentName: '[hash:base64:5]',
      },
    },
    styles: {
      sass: [
        {
          sass: {
            modules: true,
            localIdentName: '[hash:base64:5]',
            sourceMap: true,
          },
        },
      ],
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
      },
      node: {
        process: false,
      },
    },
  },
}
