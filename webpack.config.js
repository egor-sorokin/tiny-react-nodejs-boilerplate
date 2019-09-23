const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = (process.env.DEV_MODE === 'true' || process.env.DEV_MODE === true) || false;
const mode = devMode ? 'development' : 'production';
const targetPath = path.join(__dirname, './build');
let outputPath;


if (devMode) {
    outputPath = path.join(targetPath, 'dev');
} else {
    outputPath = path.join(targetPath, 'production');
}


module.exports = {
    mode,
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        path: outputPath,
        filename: devMode ? '[name].bundle.js' : '[name].[chunkhash].bundle.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.jsx', '.js', '.html']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            configFile: path.join(__dirname, '/.eslintrc.js'),
                            failOnWarning: false,
                            failOnError: false,
                            cache: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(mode)
            }
        }),
        ...([
            // Development-only plugins.
            new webpack.ProgressPlugin({
                profile: true
            })
        ])
    ],
    devtool: devMode ? 'inline-source-map' : false,
    cache: devMode,
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 3000
    },
    profile: true,
    stats: {
        errorDetails: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'build/dev'),
        compress: true,
        port: 9000
    }
};
