var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports ={
    entry: {
        js: './index.js'
    },
    output: { path: __dirname,filename:'bundle.js'},
    devtool: '#cheap-module-source-map',
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    plugins: [
        // new BrowserSyncPlugin({
        //     host: '127.0.0.1',
        //     port: 6666,
        //     proxy: 'http://localhost:8000'
        // })
    ]
}