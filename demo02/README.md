# webpack管理css,font，image等资源

开发准备：
npm install --save-dev webpack-cli //先安装脚手架
npm install --save-dev webpack //安装webpack
npm init -y

## 加载css文件
1.下载依赖
npm install --save-dev style-loader css-loader

2.配置
 rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]

## 加载image图片
1.下载依赖
npm install --save-dev file-loader

2.配置
{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}

## 加载字体
1.配置
 {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
        ]
}


## 加载数据：加载CSV、TSV 和 XML。内置支持加载json文件
1.下载依赖
npm install --save-dev csv-loader xml-loader

2.配置
 {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
        ]
}

