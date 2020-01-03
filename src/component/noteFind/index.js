import React,{useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

function NoteFind(){
    const filterRef = useRef();
    const data = useSelector(state => state.data)
    const dispatch = useDispatch();

    function filterNote(){
        const filterVal = filterRef.current.value;
        const dataFilter = data.filter(item => item.title.indexOf(filterVal) !== -1)
        dispatch({type: "FILTER_NOTE", data: dataFilter});
    }

    return (
        <div className="note-find">
            <input ref={filterRef} type="text" placeholder="Search for note by title..." />
            <button onClick={filterNote} className="btn-find"><i className="fas fa-search" /></button>
        </div>
    )
}

export default NoteFind;