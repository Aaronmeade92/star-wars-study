import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

const navStyle = {
    padding: '3px',
    textAlign: 'center',
}

const navDiv = {
    textAlign: 'center',
}
const active = {
    textDecoration: 'none',
}

class NavBar extends Component {
    render() {
        return (
            <div style={navDiv}>
                <NavLink style={navStyle} activeStyle={active} to='/home'>Home</NavLink>
                <NavLink style={navStyle} activeStyle={active} to='/characters'>Characters</NavLink>
                <NavLink style={navStyle} activeStyle={active} to='/films'>Films</NavLink>
                <NavLink style={navStyle} activeStyle={active} to='/ships'>Ships</NavLink>
            </div>
        );
    }
}

export default NavBar;