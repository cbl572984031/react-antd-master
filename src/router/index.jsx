import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../component/Loading'
import menus from './config'
import qs from 'qs'

const Home = Loading(() => import('@/page/home'))
const Swiper = Loading(() => import('@/page/swiper'))

const MenuComponents = {
    Home,
    Swiper
}

class Root extends Component {

    MenuMap = (item) => {
        return <Route exact key={item.key} path={item.key} render={props => {
            const query = window.location.search.replace(/^\?/, '')
            const Component = MenuComponents[item.component]
            return <Component {...props} query={qs.parse(query) || {}} />
        }} />
    }

    render() {
        return (
            <div style={{ padding: '15px' }}>
                <Switch>
                    {
                        menus.map(item => item.subs ? item.subs.map(i => { this.MenuMap(i) }) : this.MenuMap(item))
                    }
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </div>
        )
    }
}

export default Root;