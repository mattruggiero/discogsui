
import * as actionTypes from './actions';

const initialState = {
    display: '',
    searchResults : {}, 
    transformedResults: [],

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SEARCH:
            console.log(action.from,"WORKED");
            return ({
                ...state,
                display: action.from,
                searchResults: {...action.payload}
            })
        default: return(state);
    }
    

};



export default reducer;