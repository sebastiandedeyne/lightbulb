const config = require('../webpack.base');
const path = require('path');

config.context = __dirname;

config.entry = './lightbulb.js';

config.output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'lightbulb.js',
};

module.exports = config;