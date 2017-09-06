const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:[
		'./src/app.js'
	],
	output:{
		filename: '[name].js',
		path:path.resolve(__dirname,'dist/assets'),
		publicPath:'/assets/'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:['babel-loader'],
				include:[
					path.resolve(__dirname,'./src')
				]
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:['url-loader?limit=8192']
			},
			{
				test:/\.(mp4|ogg|svg)$/,
				use:['file-loader']
			},
			{
				test:/\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use:['url-loader?limit=10000&mimetype=application/font-woff']
			},
			{
				test:/\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use:['url-loader?limit=10000&mimetype=application/octet-stream']
			},
			{
				test:/\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use:['file-loader']
			},
			{
				test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use:['url-loader?limit=10000&mimetype=image/svg+xml']
			},
			{
		        test: /\.scss$/,
		        use: [
		            'style-loader',
		            {
		                loader: 'css-loader',
		                options: {
		                    module: true,
		                    localIdentName: '[local]--[hash:base64:6]'
		                }
		            },
		            {
		                loader: 'sass-loader'
		            }
		        ]
		    }
			
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'./src/index.html'
		}),
		new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom',
            PT: 'prop-types'
        })
	],
	resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
		    path.resolve(__dirname, 'dist'),
		    path.resolve(__dirname, 'src/common'),
		    path.resolve(__dirname, 'src/components'),
		    path.resolve(__dirname, 'src/layout'),
		    path.resolve(__dirname, 'src/view'),
		    path.resolve(__dirname, './'),
		    path.resolve(__dirname, 'semantic')
        ]
    },
	devtool:'cheap-module-eval-source-map'
	
}
