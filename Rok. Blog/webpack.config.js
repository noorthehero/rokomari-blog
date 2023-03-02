const path = require('path');

module.exports = {
    entry: './assets/js/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.bundle.js'
    }
}