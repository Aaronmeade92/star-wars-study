import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../actions/data-actions.js';

import NavBar from './NavBar.js';

class FilmContent extends Component {

    renderFilms = () => {
        this.props.fetchFilms();
    }

    render() {
        return (
            <Fragment>
            <NavBar />
                <ul>
                    {this.props.filmData.map((film, i) => <li key={i}>Title: {film.title}</li>)}
                </ul>

            <div>
                <button onClick={this.renderFilms}>Star Wars Films</button>
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    filmData: state.dataReducer,
});

const mapDispatchToProps = { fetchFilms };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(FilmContent);