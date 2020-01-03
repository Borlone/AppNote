import React from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

function NoteEdit(){
    const showEdit = useSelector(state => state.showEdit);
    const note = useSelector(state => state.noteItem);
    const dispatch = useDispatch();

    function onSubmit(e){
        const url = "https://5de46834712f9b0014513b56.mockapi.io/note/listNote/" + note.id;
        const data = {
            title: e.target.title.value,
            content: e.target.content.value,
            tags: e.target.tags.value,
            updated: new Date().toLocaleDateString()
        }
        axios({
            method: 'put',
            url: url,
            data: data
        }).then(res => {
            dispatch({type: "SHOW_EDITFORM"})
            dispatch({type: "EDIT_NOTE", data: {note: res.data, index: note.index}})
        })
        e.preventDefault();
    }

    return (
        <div className="note-editform" style={{display: showEdit ? "block" : "none"}}>
            <div className="note-edit">
                <div className="note-form">
                    <div className="form-title">
                        <span className="head-title"><i className="far fa-file-alt" />Edit Note</span>
                        <i className="fas fa-times" onClick={() => dispatch({type: "SHOW_EDITFORM"})} />
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="validTitle">Title</label>
                            <input name="title" type="text" className="form-control" id="validTitle" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contentTasks">Content</label>
                            <textarea name="content" className="form-control" id="contentTasks" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectTags">Tags</label>
                            <select name="tags" className="form-control" id="selectTags" defaultValue="Housework">
                                <option>Homework</option>
                                <option>Learning English</option>
                                <option>Housework</option>
                                <option>Exercise</option>
                                <option>Research</option>
                            </select>
                        </div>
                        <div className="btn-type">
                            <button type="submit" className="btn btn-primary"><i className="far fa-save" />Update</button>
                            <button type="button" className="btn btn-primary"><i className="fas fa-times" />Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NoteEdit;