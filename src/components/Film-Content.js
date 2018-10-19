import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../actions/film-actions.js';

import NavBar from './NavBar.js';

const button = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid black",
    borderRadius: "2px",
    padding: "16px",
    textAlign: "center",
}

const buttonPosition = {
    margin: "auto",
    width: "10%"
}
const homeStyle = {
    textAlign: "center",
}

const gifStyle = {
    width: "100%",
    height:"100%",
    zIndex: "-1"
}

class FilmContent extends Component {

    renderFilms = () => {
        this.props.fetchFilms();
    }

    render() {
        return (
            <Fragment>
            <NavBar />
            <h1 style={homeStyle}>The Archives</h1>
            <iframe style={gifStyle}src="https://giphy.com/embed/nopqz91prOyvS" width="50%" height="50%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-wars-movie-r2d2-nopqz91prOyvS"></a></p>

                <ul>
                    {this.props.filmData.map((film, i) => <li key={i}>Title: {film.title}</li>)}
                </ul>

            <div style={buttonPosition}>
                <button style={button} onClick={this.renderFilms}>Star Wars Films</button>
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    filmData: state.filmReducer,
});

const mapDispatchToProps = { fetchFilms };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(FilmContent);