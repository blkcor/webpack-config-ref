const path = require('path')
const webpack = require('webpack')
const dllAssetPath = path.join(__dirname, 'dll')
const dllLibraryName = 'dllExample'

module.exports = {
  entry: ['lodash'],
  output: {
    path: dllAssetPath,
    filename: 'vendor.js',
    library: dllLibraryName
  },
  plugins: [
    new webpack.DllPlugin({
      name: dllLibraryName,
      path: path.join(dllAssetPath, 'manifest.json')
    })
  ]
}
