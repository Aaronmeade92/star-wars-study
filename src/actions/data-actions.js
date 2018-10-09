import superagent from 'superagent';

export const FETCH = 'FETCH';

let swapiURL = 'https://swapi.co/api/people/'

export const fetch = (name) => ({
    type : FETCH,
    payload: name,
});

export const fetchData = () => {
    return dispatch => {
        superagent.get(`${swapiURL}`).then(response => {
            console.log(response.body.results)
            dispatch(fetch(response.body.results))
        });
    };
};