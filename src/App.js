import React, { Component } from 'react';
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavLink from './component/navLink/NavLink';
import NoteList from './component/noteList/NoteList';
import NoteNew from './component/noteNew/NoteNew';

class App extends Component {
  render() {
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
      </div>
    )
  }
}

export default App;
