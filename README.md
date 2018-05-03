
# lensyn-ts
Vue development package for developing large projects based on asynchronous loading module mechanism based on Routing.The development language is Typescript.

# Vue前端构架-结构目录及使用说明

## 浏览器兼容说明

1. 整体vue架构支持 >= IE9;

## WEB技术栈

架构于 vue2.5 + vue-router + vuex + axios + webpack3.0 + gulp
1. vue2.5 主体架构
2. vue-router 异步路由加载器
3. vuex 数据仓库
4. axios 数据异步请求方式
5. webpack 模块化架构工具
6. gulp 代码检测及压缩、打md5码构建工具


## 目录结构说明

```
├── lensyn-asyn/                （项目名字）
├    ├── checkDir/              （代码检查结果目录）
├    ├── devPkg/                （项目开发目录，存放vue、vuex开发文件的地方）
├    ├    ├── components/       （存放所有组件)
├    ├    ├── config/           （配置文件存在路径，数据以 data.ts)
├    ├    ├── images/           （图片存放目录)
├    ├    ├── styles/           （样式文件存放目录)
├    ├    ├── router/           （路由文件目录)
├    ├    ├── vuex/             （业务逻辑的目录）
├    ├    ├    ├── ...          （文件目录结构大致上对应componets目录结构）
├    ├    └── main.js           （入口js文件，基础vue）
├    ├── mokeData/              （moke数据文件目录）
├    ├── static/                （静态资源文件目录）
├    ├    ├── images            （所有图片文件）
├    ├    ├── style            （所有样式文件）
├    ├    ├── all.min.js        （项目）
├    ├── .gitignore             （git提交忽略文件）
├    ├── gulpfile.js            （gulp文件）
├    ├── package.json           （项目依赖文件配置）
├    ├── webpack.config.js      （项目模块化构建配置）
├    ├── index.html             （项目首页主入口）
```
## 项目结构说明：

1. 整个项目属于单页面开发，所有路由都在入口文件（router/index.js）中进行配置；
2. 编译后的文件都存放在static文件夹；
3. 所有vuex状态管理资源文件都在vuex文件夹，按功能进行文件管理，所有功能文件放在（vuex/modules）文件夹下，在index.js中进行配置；
4. 所有页面功能开发按功能模块包管理方式并以.vue文件存在；
5. 通用的页面组件都在（components/common）文件夹；

## 项目环境安装与运行
1. 安装全局lensyn-cli：
 `npm install -g lensyn-cli`
2. 安装开发库：
 `lensyn -i lensyn-asyn`
3. 运行项目：
 `npm run start`
4. 打包发布命令：
 `npm run deploy`
