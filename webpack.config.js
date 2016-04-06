var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./main",
    resolve: {
        alias: {},
        extensions: ['', '.js', '.css'],
        modulesDirectories: ["./node_modules"]
    },
   output: {
        path: path.join(__dirname, 'build')
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.jsx?$/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
