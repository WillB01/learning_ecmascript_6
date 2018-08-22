module.exports = {
    entry:'./script',
    output: {filename: 'bundle.js'},
    module: {
        loaders = [
            {test: /\.js?/,loader: 'babel-loader', exclude: /node_module/}
        ]
    }
};