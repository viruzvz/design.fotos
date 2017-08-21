const mosaaaico = require('mosaaaico2')

const ENV = process.env.NODE_ENV || 'development'
const port = Number(process.env.PORT) || 8000
const isProduction = ENV === 'production'

const config = mosaaaico({
  output: {
    publicPath: isProduction
      ? '/hpsenado/++resource++senado.hpsenado/'
      : `http://localhost:${port}/`
  },

  module: {
    rules: [{
      test: /\.yaml$/,
      loader: 'json-loader!yaml-loader'
    }]
  },

  externals: {
    jquery: 'jQuery'
  }
})

module.exports = config
