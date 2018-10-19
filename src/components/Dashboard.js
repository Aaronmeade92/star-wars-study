import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';

const homeStyle = {
    textAlign: "center",

}

const backgroundStyle = {
    width: "100%",
    height: "100em",
}

class Dashboard extends Component {

    render(){

        return(
            <Fragment>
                <NavBar />
                <div style={backgroundStyle}>
                <h1 style={homeStyle}>The Archives</h1>
                </div>
            </Fragment>
        )
    }
}

export default Dashboard;