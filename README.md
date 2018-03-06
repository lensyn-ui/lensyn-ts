
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
├── lensyn-ts/                  （项目名字）
├    ├── checkDir/              （代码检查结果目录）
├    ├── devPkg/                （项目开发目录，存放vue、vuex开发文件的地方）
├    ├    ├── components/       （存放所有组件)
├    ├    ├── config/           （配置文件存在路径，数据以 data.ts 结尾，配置以 config.ts 结尾)
├    ├    ├── images/           （图片存放目录)
├    ├    ├── pages/            （页面存放目录)
├    ├    ├── router/           （路由文件目录)
├    ├    ├── store/            （vuex 存放的目录，主要存放跨页面数据，页面所特有的数据由页面维护）
├    ├    ├── styles/           （样式文件存放目录)
├    ├    ├── util/             （工具文件存放目录)
├    ├    └── main.ts           （入口ts文件，基础vue）
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

1. 所有组件都存放到 `devPkg/components` 目录下，并由 `index.ts` 导出.
2. 所有配置、常量、数据都存放到 `devPkg/config` 目录下，并且配置文件以 `config.ts` 结尾，数据文件以 `data.ts` 结尾.
3. 所有图片存放到 `devPkg/images` 目录下.
4. 所有路由存放到 `devPkg/router` 目录下，不同模块的路由用不同文件存放，并在 `index.ts` 中引入.
5. 所有 `vuex` 状态都存放在 `store` 目录，且只将需要在不同页面共享的数据存放到 `store` 中，页面所特有的数据由页面自身维护. 
6. 所有样式文件存放到 `devPkg/styles` 目录下.
7. 所有工具方法、`directive`、`filter` 存放到 `devPkg/util` 目录，并在 `index.ts` 导入.

## 项目环境安装与运行
1. 安装全局lensyn-cli：
 `npm install -g lensyn-cli`
2. 安装开发库：
 `lensyn -i lensyn-ts`
3. 运行项目：
 `npm run start`
4. 打包发布命令：
 `npm run deploy`

## 注意
1. 当前因 `lensyn-ui` 未添加 `typescript` 支持，如果需要使用 `lensyn-ui` 需要在目录中添加 `lensyn-ui` 的 `typescript` 声明。

#### 解决方案
##### lensyn-ui 引用
1. 在 `node_modules/@types` 下添加 `lensyn-ui` 目录
2. 在 `node_modules/@types/lensyn-ui` 目录下添加 `index.d.ts` 文件，文件内容为
```ts
import { PluginFunction } from "vue";

declare class LensynUI {
    static install: PluginFunction<never>
}

export default LensynUI;
```
3. 在 `tsconfig.json` 的 `compilerOptions` 下的 `types` 中添加 `"lensyn-ui"`

