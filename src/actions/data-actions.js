import superagent from 'superagent';
import shuffle from 'shuffle-array';

export const FETCH = 'FETCH';

let swapiPeopleURL = 'https://swapi.co/api/people/';
let swapiFilmsURL = 'https://swapi.co/api/films/';


export const fetch = (name) => ({
    type : FETCH,
    payload: name,
});

export const fetchData = () => {
    return dispatch => {
        superagent.get(`${swapiPeopleURL}`).then(response => {
            console.log(response.body.results)
            dispatch(fetch(shuffle(response.body.results)));
        });
    };
};

export const fetchFilms = () => {
    return dispatch => {
        superagent.get(`${swapiFilmsURL}`).then(response => {
            console.log(response.body.results)
            dispatch(fetch(response.body.results));
        });
    };
};