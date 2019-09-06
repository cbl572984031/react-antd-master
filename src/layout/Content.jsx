import React, { Component } from 'react';
import FreeScrollBar from 'react-free-scrollbar'
import Router from '../router/index'

class Content extends Component {

    render() {
        return (
            <div id='centent'>
                {
                    this.props.isMobile ?
                        <Router></Router>
                        :
                        <FreeScrollBar timeout={300}>
                            <Router></Router>
                        </FreeScrollBar>
                }
            </div>
        );
    }
}

export default Content;