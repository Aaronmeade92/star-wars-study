import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';

const homeStyle = {
    textAlign: "center",
}

class Dashboard extends Component {

    render(){

        return(
            <Fragment>
                <NavBar />
                <h1 style={homeStyle}>The Archives</h1>
            </Fragment>
        )
    }
}

export default Dashboard;