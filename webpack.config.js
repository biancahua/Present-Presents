const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// entry point of our application
	entry: './client/src/index.js',
	// tell webpack name/location of the bundle file that will be generated when we produce a production build
	output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
	},

	mode: process.env.NODE_ENV,

	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
			publicPath: '/dist'
		},
		proxy: {
			"/api": 'http://localhost:3000/'
		}
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			// tells webpack to inject the bundle.js file into an html file called index.html inside of client folder
			template: path.join(__dirname, './client/src/index.html')
		})
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', 
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};