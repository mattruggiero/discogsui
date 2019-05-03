import axios from 'axios';
import * as actionTypes from '../store/actions';
import store from '../index.js';



export function apiSearch(id, filter, from) {
    let url = '/';
    if (from === 'SearchResults'){url = url+'search'}
    else {url =url+from}
     axios({
            method: 'post',
            url: url,
            data: {
                id:id, 
                filter: filter 
            }
        })
        .then(response => {
            store.dispatch({
            type: actionTypes.SEARCH,
            from: from,
            payload: response
            })

           
    })
}






