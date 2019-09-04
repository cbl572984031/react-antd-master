import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import * as serviceWorker from './serviceWorker';
import Router from './router/index'
import { Provider } from 'react-redux'
import store from './store/index'
import 'moment/locale/zh-cn';
import './assets/style/main.css';
import './assets/style/animate.css'

moment.locale('zh-cn');

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ConfigProvider>
    ,
    document.getElementById('root')
);
// 切换主题颜色
if (localStorage.hasOwnProperty('@primary-color') && localStorage.getItem('@primary-color') != '#1890ff') {
    let primaryColor = localStorage.getItem('@primary-color');
    primaryColor && window.less.modifyVars({
        '@primary-color': primaryColor,
        '@border-color-base': primaryColor
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
