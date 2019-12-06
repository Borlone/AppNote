import React from "react";
import {useDispatch} from "react-redux";

function showEditForm(dispatch, id){
    dispatch({type: "EDIT_NOTE", id: id});
    dispatch({type: "SHOW_EDITFORM"});
}

function NoteItem(props){
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <button onClick={() => showEditForm(dispatch, props.id)}><i className="fas fa-pencil-alt" /></button>
                <button><i className="fas fa-trash" /></button>
            </td>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.updated}</td>
        </tr>
    )
}

export default NoteItem;