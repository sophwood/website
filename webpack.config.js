var path = require('path');

var config = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader'
        }]
    }
};

module.exports = config;
