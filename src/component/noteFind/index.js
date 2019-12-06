import React from "react";

function NoteFind(){
    return (
        <div className="note-find">
            <input type="text" placeholder="Search for note by title..." />
            <button className="btn-find"><i className="fas fa-search" /></button>
        </div>
    )
}

export default NoteFind;