import React, {Fragment, Component } from 'react';
import { connect, Provider } from 'react-redux';
import {fetchData} from '../actions/data-actions.js';

import NavBar from './NavBar.js';

const charButton = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid black",
    borderRadius: "2px",
    padding: "16px",
    
}

const dataFormat = {
    paddingLeft: "10%",
}

class CharacterContent extends Component {

    renderData = () => {
        this.props.fetchData();
    }

    render(){

        return(
            
            <Fragment>
                <NavBar />
                <ul>
                    {this.props.data.map((character, i) => 
                    <li key={i}>Name: {character.name}<br />Birth Year: {character.birth_year}</li>

                    )}
                </ul>
                
                <div style={dataFormat}>
                <button style={charButton} onClick={this.renderData}>Star Wars People</button>
                </div>

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
    )(CharacterContent);