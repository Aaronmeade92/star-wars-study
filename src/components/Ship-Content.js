import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchShips } from '../actions/ship-actions.js';

import NavBar from './NavBar.js';

const homeStyle = {
    textAlign: "center",
}

const gifStyle = {
    width: "100%",
    height:"100%",
    zIndex: "-1",    
}

const buttonPosition = {
    margin: "auto",
    width: "10%",
}

const button = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid black",
    borderRadius: "2px",
    padding: "16px",
    textAlign: "center",
}

class shipContent extends Component {

    renderShips = () => {
        this.props.fetchShips();
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <h1 style={homeStyle}>The Archives</h1>
                <iframe style={gifStyle}src="https://giphy.com/embed/nopqz91prOyvS" width="50%" height="50%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-wars-movie-r2d2-nopqz91prOyvS"></a></p>

                <ul>
                    {this.props.shipData.map((ship, i) => <li key={i}>Model: {ship.model}<br />Manufacturer: {ship.manufacturer}</li>)}
                </ul>

                <div style={buttonPosition}>
                    <button style={button} onClick={this.renderShips}>Star Wars Ships</button>
                </div>
            </Fragment>
                
        );
    }
}

const mapStateToProps = state => ({
    shipData: state.shipReducer,
})

const mapDispatchToProps = { fetchShips };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(shipContent);