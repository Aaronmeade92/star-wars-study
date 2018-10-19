import superagent from 'superagent';

let swapiFilmsURL = 'https://swapi.co/api/films/';

export const FETCH = "FETCH"

export const get = (film) => ({
    type : FETCH,
    payload: film,
});

export const fetchFilms = () => {
    return dispatch => {
        superagent.get(`${swapiFilmsURL}`).then(response => {
            console.log(response.body.results)
            dispatch(get(response.body.results));
        });
    };
};