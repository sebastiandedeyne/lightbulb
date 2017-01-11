const path = require('path');

module.exports = {
    context: __dirname,
    entry: './app.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'app.js',
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
