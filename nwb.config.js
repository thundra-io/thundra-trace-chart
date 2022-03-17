module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    // umd: {
    //   global: 'ReactTraceChart',
    //   externals: {
    //     react: 'React'
    //   }
    // }
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
            sourceMap: false,
          },
        },
      ],
    },
    terser: {
      terserOptions: {
        mangle: true,
        beautify: false,
        // sourceMap: false
      },
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
      },
      node: {
        process: false,
      }
    },
  },
}
