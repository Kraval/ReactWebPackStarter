## Basic Weebpakc Starter App

Initialize Yarn 
```
yarn init
```

Install needed development repositories, namely webpack, webpack-dev-server

```
yarn add --dev webpack webpack-dev-server browser-sync browser-sync-webpack-plugin
```

Add index.html
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Basic React Start App</title>
        <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,500,600,700' rel='stylesheet' type='text/css' />
    </head>
    <body>
        <div id="app"></div>
        <script src="/bundle.js"></script>
    </body>
</html>
```

Add index.js
```
alert('hello World');
```

Add webpack.config.js

```
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
```

Add following script into your package.json

```
"scripts": {
    "start": "webpack-dev-server --progress --colors -w"
  }
```

Go ahead and run your script. 
```
yarn start
```
