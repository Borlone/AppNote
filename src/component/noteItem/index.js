import React from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

function showEditForm(dispatch, id, index){
    dispatch({type: "GET_NOTE", data: {id: id, index: index}})
    dispatch({type: "SHOW_EDITFORM"});
}
function delNoteItem(dispatch, id){
    axios({method: "DELETE", url: "https://5de46834712f9b0014513b56.mockapi.io/note/listNote/" + id})
        .then((res) => {dispatch({type: "DEL_NOTE", data: res.data})})
}

function NoteItem(props){
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <button onClick={() => showEditForm(dispatch, props.id, props.index)}><i className="fas fa-pencil-alt" /></button>
                <button onClick={() => delNoteItem(dispatch, props.id)}><i className="fas fa-trash" /></button>
            </td>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.updated}</td>
        </tr>
    )
}

export default NoteItem;