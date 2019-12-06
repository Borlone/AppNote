import React from 'react';
import NoteList from "./component/noteList";
import NoteNew from "./component/noteNew";
import NoteTitle from "./component/noteTitle";
import NoteEdit from "./component/noteEdit";
import NavLink from "./component/navLink"; 
import "./App.scss";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="note-app">
      <div className="note-main">
        <NoteTitle />
        
        <BrowserRouter>
          <NavLink />
          <Route path="/" exact component={NoteList} />
          <Route path="/list" exact component={NoteList} />
          <Route path="/new" exact component={NoteNew} />
        </BrowserRouter>
      </div>
      <NoteEdit />
    </div>
  );
}

export default App;
