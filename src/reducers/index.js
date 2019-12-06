import * as types from "../actions/action-types";

const dataNoteInit = {
    showEdit: false,
    idNote: null,
    data: []
}

function showReducer(state = dataNoteInit, action){
    switch(action.type){
        case types.SHOW_EDITFORM:
            return {
                ...state,
                showEdit: !state.showEdit
            }
        case types.SHOW_LISTNOTE:
            return {
                ...state,
                data: action.data
            }
        case types.EDIT_NOTE:
            return {
                ...state,
                idNote: action.id
            }
        default:
            return state
    }
} 

export default showReducer;