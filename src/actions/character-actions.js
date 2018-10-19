import superagent from 'superagent';
import shuffle from 'shuffle-array';

export const FETCH = 'FETCH';

let swapiPeopleURL = 'https://swapi.co/api/people/';

export const fetch = (name) => ({
    type : FETCH,
    payload: name,
});

export const fetchCharacters = () => {
    return dispatch => {
        superagent.get(`${swapiPeopleURL}`).then(response => {
            console.log(response.body.results)
            dispatch(fetch(shuffle(response.body.results)));
        });
    };
};
