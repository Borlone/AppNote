import React,{useEffect} from "react";
import NoteFind from "../noteFind";
import NoteItem from "../noteItem";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

function renderNoteItem(arr){
    return arr.map((i,index) => <NoteItem key={index} id={i.id} title={i.title} content={i.content} updated={i.updated} />)
}

function NoteList(){
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://5de46834712f9b0014513b56.mockapi.io/note/listNote').then(res => {
            dispatch({
                type: "SHOW_LISTNOTE",
                data: res.data
            })
        })
    })

    return(
        <div className="note-list">
            <NoteFind />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Updated Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderNoteItem(data)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NoteList;