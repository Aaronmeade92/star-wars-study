import React, {Fragment, Component } from 'react';
import { connect, Provider } from 'react-redux';
import {fetchCharacters} from '../actions/character-actions.js';

import NavBar from './NavBar.js';

const button = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid black",
    borderRadius: "2px",
    padding: "16px",
    
}


const dataFormat = {
    margin: "auto",
    width: "10%",
}

const homeStyle = {
    textAlign: "center",
}

const gifStyle = {
    width: "100%",
    height:"100%",
    zIndex: "-1"
}

class CharacterContent extends Component {

   renderData = () => {
       this.props.fetchCharacters();
   }
    render(){

        return(
            
            <Fragment>
                <NavBar />
                
                <h1 style={homeStyle}>The Archives</h1>
                <iframe style={gifStyle}src="https://giphy.com/embed/nopqz91prOyvS" width="50%" height="50%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-wars-movie-r2d2-nopqz91prOyvS"></a></p>


                <ul>
                    {this.props.data.map((character, i) => 
                    <li key={i}>Name: {character.name}<br />Birth Year: {character.birth_year}</li>
                    )}
                </ul>
                
                <div style={dataFormat}>
                <button style={button} onClick={this.renderData}>Star Wars People</button>
                </div>
                

            </Fragment>
        
        )
    }
}

const mapStateToProps = state => ({
    data: state.dataReducer,
})

const mapDispatchToProps = { fetchCharacters };

export default connect(
    mapStateToProps,
    mapDispatchToProps, 
    )(CharacterContent);