import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'moment/locale/zh-cn';
import './assets/style/main.css';
import Loading from './component/Loading'

const App = Loading(() => import('./App'))
const Login = Loading(() => import('./page/login'))

moment.locale('zh-cn');

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' render={props => {
                        return <Login {...props} />
                    }} />
                    <Route path="/" render={props => <App {...props} />}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);

// theme toggle color                                                                                                         
if (localStorage.hasOwnProperty('@primary-color') && localStorage.getItem('@primary-color') !== '#1890ff') {
    let primaryColor = localStorage.getItem('@primary-color');
    primaryColor && window.less.modifyVars({
        '@primary-color': primaryColor
    });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
