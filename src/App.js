import React from 'react';
import NoteList from "./component/noteList";
import NoteNew from "./component/noteNew";
import NoteEdit from "./component/noteEdit";
import NavLink from "./component/navLink";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="note-app">
      <div className="note-main">
        <div className="note-title">
          <i className="fas fa-edit"></i>
          <span>Note Works</span>
        </div>

        <Router>
          <NavLink />
          <Route path="/" exact component={NoteList} />
          <Route path="/list" exact component={NoteList} />
          <Route path="/new" exact component={NoteNew} />
        </Router>
      </div>
      <NoteEdit />
    </div>
  );
}

export default App;
