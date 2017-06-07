const fs = require('fs');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const entryDirectory = './src/ts/entry/';
const entryFiles = fs.readdirSync(entryDirectory);

let output = {
    entry: {},
    resolve:{
        extensions:[]
    },
    plugins:[],
    module:{
        rules:[]
    }
};

let entries = entryFiles.map(function(entry) {
    return entry.replace(/\.tsx?/, '');
});

entries.forEach(function(entry) {
    output.entry[entry] = entryDirectory + entry + '.ts';
});
output.output = {
    path: path.join(__dirname, 'dist'),
    publicPath: "",
    filename: '[name].js?v=[hash]',
    libraryTarget: 'umd'
};
output.resolve.extensions.push('.js');
output.resolve.extensions.push('.ts');
output.resolve.extensions.push('.tsx');
//html
entries.forEach(function(entry) {
    output.plugins.push(new HtmlWebpackPlugin({
        filename: entry + '.html',
        inject: 'body',
        template: './src/html/' + entry + '.html',
        chunks: [entry]
    }));
});
output.module.rules.push({
    test: /\.html$/,
    use: [ {
        loader: 'html-loader',
        options: {
            minimize: false
        }
    }],
});
//sass
output.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use: [{
            loader: 'css-loader'
        }, {
            loader:'sass-loader'
        }]
    })
});
output.plugins.push(new ExtractTextPlugin("css/[name].css?v=[hash]"));
output.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: path.join(__dirname, 'node_modules')
});
output.module.rules.push({
    test: /\.png$/, use: [ "url-loader?limit=20480&name=image/[hash].[ext]&mimetype=image/png" ]
});
output.module.rules.push({
    test: /\.jpg$/, use: [ "url-loader?limit=20480&name=image/[hash].[ext]&mimetype=image/jpg" ]
});
module.exports = output;