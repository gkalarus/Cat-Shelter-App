module.exports = {
    entry: "./app.jsx",
    output: {
        filename: "./out.js"
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-2', 'react']
            }
        }
        ]
    }
}