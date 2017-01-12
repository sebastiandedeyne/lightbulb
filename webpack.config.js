const config = require('./webpack.base');
const path = require('path');

config.context = __dirname;

config.entry = './src/index.ts';

config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'lightbulb',
    libraryTarget: 'umd',
};

module.exports = config;
