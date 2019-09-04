import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable';
// import App from '../App'

//通用的过场组件
const loadingComponent = (props) => {
    if (props.error) {
        return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>
    } else {
        return null;
    }
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
const loadable = (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading,
        delay: 200, //页面加载超过这个ms，pastDelay为true，将显示加载文字
        timeout: 500 // 页面加载超时，timedOut属性为true，可提升展示刷新按钮
    });
}

const App = loadable(() => import('../App'))

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Root;