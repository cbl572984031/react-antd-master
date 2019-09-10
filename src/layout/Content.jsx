import React, { Component } from 'react';
import FreeScrollBar from 'react-free-scrollbar'
import Router from '../router/index'

class Content extends Component {

    render() {
        return (
            <div id='centent' style={this.props.isMobile ? {} : { borderRadius: '6px' }}>
                {
                    this.props.isMobile ?
                        <Router {...this.props}></Router>
                        :
                        <FreeScrollBar autohide={true} timeout={300}>
                            <Router {...this.props}></Router>
                        </FreeScrollBar>
                }
            </div>
        );
    }
}

export default Content;