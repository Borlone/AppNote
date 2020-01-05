import * as types from "../actions/action-types";

const dataNoteInit = {
    data: []
}

function Reducer(state = dataNoteInit, action){
    switch(action.type){
        case types.SHOW_NOTE:
            return {
                ...state,
                data: action.data
            }
        case types.DEL_NOTE:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
} 

export default Reducer;