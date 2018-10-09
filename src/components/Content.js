import React, {Fragment, Component } from 'react';
import { connect, Provider } from 'react-redux';
import {fetchData} from '../actions/data-actions.js';

const charInfo = {
    paddingLeft: "10%",
    textAlign: "left",
}

class Content extends Component {

    renderData = () => {
        this.props.fetchData();
    }

    render(){

        return(
            <Provider>
            <Fragment>
            <button onClick={this.renderData}>Random Star Wars</button>
            <h1 style={charInfo}>
                <ul>
                    {this.props.data.map((character, i) => <li key={i}>{character.name}</li>)}
                </ul>
            </h1>
            <p style={charInfo}>CHAR INFO</p>
            </Fragment>
            </Provider>
        )
    }
}

const mapStateToProps = state => ({
    data: state.dataReducer,
})

const mapDispatchToProps = { fetchData };

export default connect(
    mapStateToProps,
    mapDispatchToProps, 
    )(Content);