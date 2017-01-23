var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './app/weather-app.js'
    },
    module: {
        rules: [{
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
};