const path = require('path')

// plugins y minificadores de css y scss/sass
// Para reducir el tamaño de las hojas de estilo de nuestro proyecto

const HtmlWebpackPlugin = require('html-webpack-plugin') // Para el template del html que va a usar webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // para reducir los css
const { SourceMapDevToolPlugin } = require('webpack') // Para conocer el Source Map de nuestro proyecto

// Configuración del puerto

const port = process.env.PORT || 3000

// Exportar configuración de webpack

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        inline: true,
        historyApyFallback: true
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // reglas para archivos de JS y JSX
            // tienen que pasar el LINTING para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                    'source-map-loader'
                ]
            },
            // reglas para archivos JS y JSX
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                user: {
                    loader: 'babel-loader'
                },
                query: {
                    presets: [
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            },
            // reglas para archivos css, sass y scss para minificarlos y cargarlos en el bundle
            {
                test: /(\.css|\.scss)$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // reglas para los archivos de imágenes
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // template html
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/styles.css'
        }),
        new SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
        modules: [
            'node_modules'
        ]
    }
}
