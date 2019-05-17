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
    // aliases: {
    //   Components: path.resolve(__dirname, 'src/Components'),
    //   Constants: path.resolve(__dirname, 'src/Constants'),
    //   Assets: path.resolve(__dirname, 'src/Assets'),
    //   Utils: path.resolve(__dirname, 'src/Utils'),
    // },
  },
  
  // webpack: {
  //   rules: {
  //     'sass-css': {
  //       modules: true,
  //       localIdentName:  '[hash:base64:5]'
  //     },
  //   }
  // }

  // webpack: {
  //   rules: {
  //     sass: {
  //       modules: true,
  //       localIdentName: '[name]__[local]__[hash:base64:5]',
  //       data: '@import "_variables"',
  //       includePaths: [path.resolve('src/DetailedTraceSummary')]
  //     }
  //   }
  // }
}
