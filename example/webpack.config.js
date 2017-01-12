const path = require('path');

module.exports = {
    context: __dirname,
    entry: './lightbulb.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'lightbulb.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    devServer: {
        contentBase: __dirname,
    },
};
