const path = require('path')

module.exports = {
    entry: './src/main/front/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs')
    }
}
