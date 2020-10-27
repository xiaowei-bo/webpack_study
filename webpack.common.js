const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const fs = require('fs');


let config = {
    entry: '',
    plugins: [
        new ManifestPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            Vue: 'vue/dist/vue.esm.js'
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV) //字符串
        })
    ],
    output: {
        filename: 'src/[name]/index_[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".js", ".vue"],
        modules: ["./node_modules"],
        alias: {
            '@': path.resolve(__dirname, 'src','common_resource'),
            'vue$': 'vue/dist/vue.min.js'
        }
    },
    module: {
        rules: [
            { // vue 文件处理
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { // js文件向下兼容
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            { // scss文件处理
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { // 图片文件处理
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, //10K
                            esModule: false,
                            name: '[name]_[hash:6].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'target_url',
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    optimization: {
        concatenateModules: false,
        splitChunks: { //分割代码块
            maxInitialRequests: 6, // 默认是5
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    // 第三方依赖
                    priority: 2,
                    name: 'vendor',
                    test: /node_modules/,
                    minChunks: 1, //重复引入了几次
                    reuseExistingChunk: true
                },
                vue: {
                    name: "vue",
                    priority: 2, // 权重需大于`vendor`
                    test: /[\/]node_modules[\/]vue[\/]/,
                    minChunks: 1, //重复引入了几次
                    reuseExistingChunk: true,
                }
            }
        },
    }
};

/**
 * 获取开发目录 src/pages 下所有目录文件名
 */
function getPathName (path) {
    
    let entries = fs.readdirSync(path);
    return entries;
}

/**
 * 动态入口配置
 * 支持 js && ts 入口
 */
function addEntry () {
    let entryObj = {};
    getPathName("./src/pages").forEach(item => {
        let itemArr = getPathName("./src/pages/" + item);
        if(itemArr.includes('index.js')) {
            entryObj[item] = path.resolve(__dirname, 'src/pages', item, 'index.js');
        } else if(itemArr.includes('index.ts')) {
            entryObj[item] = path.resolve(__dirname, 'src/pages', item, 'index.ts');
        }
    });
    return entryObj
}

let common_js_entry = {
    dog: path.resolve(__dirname, 'src', 'common_resource','js','common.js'),
    page_load: path.resolve(__dirname,'src','common_resource','js','page_load.js')
};
config.entry = Object.assign(common_js_entry,addEntry());


/**
 * 每个目录动态生成 html 文件
 */
getPathName("./src/pages").forEach( pathName => {
    let htmlFileList = fs.readdirSync("./src/pages/" + pathName + "/views");
    htmlFileList.forEach(inner_fileName => {
        let conf = {
            filename: path.join('views',pathName,inner_fileName),
            template: path.join(__dirname, 'src/pages', pathName, 'views', inner_fileName),
            chunks: ['page_load','dog',pathName],
            inject: 'body',
            favicon: path.resolve(__dirname, 'src', 'common_resource', 'images', 'favicon.png'),
            hash: true,
            minify: true
        };
        config.plugins.push(new HtmlWebpackPlugin(conf));
    })
});

module.exports = config;
