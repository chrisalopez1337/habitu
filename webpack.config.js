const path = require('path');
const sourceDir = path.join(__dirname, '/client/src');
const distDir = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${sourceDir}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: distDir,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
