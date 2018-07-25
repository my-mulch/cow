const path = require('path')

module.exports = {
    entry: './src/front/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}