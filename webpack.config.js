// webpack.config.js 
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let pagesList = require('./geekpack.json');
let entryItem = {};
let htmlArray = [
  new cleanWebpackPlugin(
    ['./build'], //匹配要删除的文件，这里则指定每次对dist文件夹进行清理 
    {
      root: __dirname,//指定插件根目录位置 
      verbose: true, //开启在控制台输出信息 
      dry: false //启用删除文件 
    })
]

pagesList.pages.forEach((item) => {
  entryItem[item] = `./src/pages/${item}/app.js`;
  let htmlPlugin = new htmlWebpackPlugin({
    template: `./src/pages/${item}/index.html`,
    //定义插件读取的模板文件是根目录下的index.html 
    filename: `${item}.html`,
    //定义通过模板文件新生成的页面名称
    chunks: [`${item}`],
  });
  htmlArray.push(htmlPlugin);
});

module.exports = {
  //entry: path.resolve(__dirname, './src/js/app.js'),
  //指定webpack打包的入口是app.js 
  entry: entryItem,
  output: {
    path: path.resolve(__dirname, './build'),
    //指定打包后js文件放置的位置 
    // filename: 'js/[name]/bundle-[hash].js'
    filename: '[name].[chunkhash].bundle.js?'
    //指定打包后的js名称，这个就是index.html最终引入的js的名称 
  },
  plugins: htmlArray,
  module: {
    rules: [
      {
        test: /\.css$/,//匹配所有css文件 
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" }
        ],//指定加载器 
        exclude: /node_modules/
        //排除对node_module文件夹下面的所有资源的匹配 
      }, {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
          { loader: "less-loader" }
          //less放在最后，因为要最先加载（loader从右往左加载的规则） 
        ]
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[hash].[ext]',
            limit: 10240,
            outputPath: 'img/',
            //定义图片输出存放的文件夹位置
            useRelativePath: true,
            //设置路径为相对位置 
          }
        }]
      }
    ]
  },
  devServer: {
    port: 3000,
    inline: true
  }
}
