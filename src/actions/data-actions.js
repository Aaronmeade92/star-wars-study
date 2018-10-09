import superagent from 'superagent';
import shuffle from 'shuffle-array';

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
            dispatch(fetch(shuffle(response.body.results)));
        });
    };
};

// export const randomName = () => {
//     return dispatch => {
//         superagent.get(`${swapiURL}`).then(response => {
//             console.log(response.body.results)
//             dispatch(fetch(shuffle(response.body.results)));
//         })
//     }
// }