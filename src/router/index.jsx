import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loading from '../component/Loading'

const App = Loading(() => import('@/page/home/index'))

class Root extends Component {
    render() {
        return (
            <div style={{ padding: '15px' }}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Root;