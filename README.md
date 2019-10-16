# react admin-master
## 技术栈

react@16.9.0 + react-redux@7.1.1 + react-router-dom@5.0.1 + antd@3.22.1

## 项目介绍

如有路径问题，请将react-scripts/config/webpack.config.js 下 alias 添加 '@': paths.appSrc ，配置全局资源路径

```
cd react-antd-master

npm install || cnpm install

npm start

浏览器：http://localhost:3000/

npm run build
```

## 目录介绍
```
/src --项目主路径
    /assets             --资源文件
    /axios              --api封装
    /component          --组件
    /layout             --布局
    /page               --展示页面
    /router             --路由控制
    /store              --redux封装
```

## 插件说明

react-color                     拾色器

react-free-scrollbar            可定制的滚动条

react-beautiful-dnd             拖拽组件

react-loadable                  路由懒加载

screenfull                      全屏

clipboard                       文本复制

braft-editor                    富文本编辑器