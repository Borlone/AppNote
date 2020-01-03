import * as types from "../actions/action-types";

const dataNoteInit = {
    showEdit: false,
    isDirectToHome: false,
    noteItem: null,
    data: []
}

function Reducer(state = dataNoteInit, action){
    switch(action.type){
        case types.SHOW_EDITFORM:
            return {
                ...state,
                showEdit: !state.showEdit,
            }
        case types.GET_NOTE:
            return {
                ...state,
                noteItem: {id: action.data.id, index: action.data.index}
            }
        case types.SHOW_LISTNOTE:
            return {
                ...state,
                data: action.data
            }
        case types.BACK_TOHOME:
            return {
                ...state,
                isDirectToHome: !state.isDirectToHome
            }
        case types.EDIT_NOTE:
            return {
                ...state,
                data: Object.assign([...state.data], {[action.data.index]: action.data.note})
            }
        case types.DEL_NOTE:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.data.id)
            }
        case types.FILTER_NOTE:
            return {
                ...state,
                data: JSON.parse(JSON.stringify(state.data)).filter(item => item.title.indexOf(action.data) !== -1)
            }
        default:
            return state
    }
} 

export default Reducer;