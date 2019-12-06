import React from "react";

function NoteNew(){
    return (
        <div className="note-newform">
            <div className="note-new">
                <div className="note-form">
                    <div className="form-title">
                        <span className="head-title"><i className="far fa-file-alt" />New Note</span>
                        <i className="fas fa-times" />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="validTitle">Title</label>
                            <input type="text" className="form-control" id="validTitle" aria-describedby="validTitle" placeholder="Title" required />
                            <small id="validTitle" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contentTasks">Content</label>
                            <textarea className="form-control" id="contentTasks" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectTags">Tags</label>
                            <select className="form-control" id="selectTags">
                            <option>Homework</option>
                            <option>Learning English</option>
                            <option>Housework</option>
                            <option>Exercise</option>
                            <option>Research</option>
                            </select>
                        </div>
                        <div className="btn-type">
                            <button type="submit" className="btn btn-primary"><i className="far fa-save" />Save</button>
                            <button type="button" className="btn btn-primary"><i className="fas fa-times" />Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    )
}

export default NoteNew;