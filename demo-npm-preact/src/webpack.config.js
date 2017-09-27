var webpack = require('webpack')

module.exports = {
    entry:`${__dirname}/index.js`,
    output: {
        filename: 'npm.js',
        path: `${__dirname}`
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                options: {
                    presets: [
                    'es2015'
                    ],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            },
            {
                test: /\.css$/i,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
