const path = require("path");

// const webpack = require("webpack");
module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname, "app", "assets", "javascripts"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				exclude: /(node_modules)/,
				use: ["@svgr/webpack"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /(node_modules)/,
				use: ["file-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ["@babel/env", "@babel/react"]
					}
				}
			}
		]
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [".js", ".jsx", "*"]
	}
};
