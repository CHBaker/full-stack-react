const path = require('path');

const config = {
    mode: 'development',
    entry: './lib/components/index.js',
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