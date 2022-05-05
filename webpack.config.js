const path = require('path')
module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.tsx?$/, loader: "babel-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 9000
    }
}