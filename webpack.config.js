const path = require('path');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules')
        ]
    },
    mode: 'development',
    entry: 'renderers/dom.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = config;