import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class NoteNew extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDirect: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            content: e.target.content.value,
            tags: e.target.tags.value,
            updated: new Date().toLocaleDateString()
        }
        axios({
            method: 'post',
            url: "https://5de46834712f9b0014513b56.mockapi.io/note/listNote",
            data: data
        }).then(() => this.setState({isDirect: true})) 
    }

    render(){
        if(this.state.isDirect){
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div className="note-newform">
                <div className="note-new">
                    <div className="note-form">
                        <div className="form-title">
                            <span className="head-title"><i className="far fa-file-alt" />New Note</span>
                        </div>
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="validTitle">Title</label>
                                <input name="title" type="text" className="form-control" id="validTitle" placeholder="Title" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contentTasks">Content</label>
                                <textarea name="content" className="form-control" id="contentTasks" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectTags">Tags</label>
                                <select name="tags" className="form-control" id="selectTags">
                                    <option>Homework</option>
                                    <option>Learning English</option>
                                    <option>Housework</option>
                                    <option>Exercise</option>
                                    <option>Research</option>
                                </select>
                            </div>
                            <div className="btn-type">
                                <button type="submit" className="btn btn-primary"><i className="far fa-save" />Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        )
    }
}

export default NoteNew;