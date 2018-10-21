import superagent from 'superagent';

let swapiShipsURL = 'https://swapi.co/api/starships/';

export const FETCH = "ship/FETCH"

export const get = (film) => ({
    type : FETCH,
    payload: film,
});

export const fetchShips = () => {
    return dispatch => {
        superagent.get(`${swapiShipsURL}`).then(response => {
            console.log(response.body.results)
            dispatch(get(response.body.results));
        });
    };
};