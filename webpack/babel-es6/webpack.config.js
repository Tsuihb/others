module.exports = {
    entry: "./app.js",
    output: {
        filename: "[name].[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader:"babel-loader",
                    options: {
                        // 当前设定
                        "presets": [
                            ["env", {
                              "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                              }
                            }]
                          ]
                    }
                },
                // 忽略查找
                exclude: "/node_modules/"
            }
        ]
    }
}