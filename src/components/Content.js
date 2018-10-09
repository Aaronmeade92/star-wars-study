import React, {Fragment, Component } from 'react';
import { connect, Provider } from 'react-redux';
import {fetchData} from '../actions/data-actions.js';
import { randomize } from '@icantbelieveitsnotrandom/weighted-randomizer';

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
            
            <Fragment>
            <button onClick={this.renderData}>Random Star Wars</button>
            
                <ul>
                    {this.props.data.map((character, i) => 
                    <li key={i}>Name: {character.name}<br />Birth Year: {character.birth_year}</li>
                    )}
                </ul>

            <p style={charInfo}>CHAR INFO</p>
            </Fragment>
        
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