import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import menus from './config'
import qs from 'qs'
import Page from '@/page'

class Root extends Component {

    MenuMap = (item) => {
        if (process.env.BABEL_ENV === "production" && item.auth) {
            if (!localStorage.hasOwnProperty('token')) {
                return <Redirect key={item.key} to="/login" />
            }
        }
        return <Route exact key={item.key} path={item.key} render={props => {
            const query = window.location.search.replace(/^\?/, '')
            const Component = Page[item.component] || Page.Home
            return <Component {...props} {...this.props} query={qs.parse(query) || {}} />
        }} />
    }

    render() {
        let renderMenu = menus.map(item => item.subs ? item.subs.map(i => this.MenuMap(i)) : this.MenuMap(item))
        return (
            <div style={this.props.isMobile ? { height: '100%', fontSize: '14px' } : { padding: '15px', fontSize: '14px', height: '100%' }} >
                <Switch>
                    {
                        renderMenu
                    }
                    {/* <Route render={() => <Redirect to="/" />} /> */}
                </Switch>
            </div>
        )
    }
}

export default Root;
