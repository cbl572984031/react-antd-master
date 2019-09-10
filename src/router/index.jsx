import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../component/Loading'
import menus from './config'
import qs from 'qs'
import LoadingPage from '@/page/dome/loading'
const Home = Loading(() => import('@/page/home'))
const Swiper = Loading(() => import('@/page/swiper'))
const Echarts_China = Loading(() => import('@/page/chart/echarts_China'))
const Draw = Loading(() => import('@/page/chart/Draw_Galaxy'))

const MenuComponents = {
    Home,
    Swiper,
    Echarts_China,
    Draw,
    LoadingPage
}

class Root extends Component {

    MenuMap = (item) => {
        return <Route exact key={item.key} path={item.key} render={props => {
            const query = window.location.search.replace(/^\?/, '')
            const Component = MenuComponents[item.component] || Home
            return <Component {...props} query={qs.parse(query) || {}} />
        }} />
    }

    render() {
        return (
            <div style={this.props.isMobile ? { height: '100%' } : { padding: '15px', height: '100%' }} >
                <Switch>
                    {
                        menus.map(item => item.subs ? item.subs.map(i => this.MenuMap(i)) : this.MenuMap(item))
                    }
                    {/* <Route render={() => <Redirect to="/" />} /> */}
                </Switch>
            </div>
        )
    }
}

export default Root;