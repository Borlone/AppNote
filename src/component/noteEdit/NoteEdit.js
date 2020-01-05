import React, {Component} from "react";
import { connect } from "react-redux";
import axios from "axios";

class NoteEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataChange: this.props.dataNoteFill
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const _this = this;
        const url = "https://5de46834712f9b0014513b56.mockapi.io/note/listNote/" + this.props.dataNoteFill.id;
        
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
            _this.props.onUpdateData(res.data, _this.props.dataNoteFill.index); 
            _this.onCloseEditForm(res.data, _this.props.dataNoteFill.index);
        })
    }

    onCloseEditForm = (data, index) => {
        this.props.onCloseEditForm(data, index);
    }
    onChange = e => {
        const newData = this.state.dataChange;
        newData[e.target.name] = e.target.value;
        this.setState({
            dataChange: newData
        })
    }

    render(){
        const {dataChange} = this.state;
        return (
            <div className="note-editform">
                <div className="note-edit">
                    <div className="note-form">
                        <div className="form-title">
                            <span className="head-title"><i className="far fa-file-alt" />Edit Note</span>
                            <i className="fas fa-times" onClick={this.onCloseEditForm} />
                        </div>
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="validTitle">Title</label>
                                <input onChange={this.onChange} value={dataChange.title} name="title" type="text" className="form-control" id="validTitle" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contentTasks">Content</label>
                                <textarea onChange={this.onChange} value={dataChange.content} name="content" className="form-control" id="contentTasks" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectTags">Tags</label>
                                <select onChange={this.onChange} value={dataChange.tags} name="tags" className="form-control" id="selectTags">
                                    <option>Homework</option>
                                    <option>Learning English</option>
                                    <option>Housework</option>
                                    <option>Exercise</option>
                                    <option>Research</option>
                                </select>
                            </div>
                            <div className="btn-type">
                                <button type="submit" className="btn btn-primary"><i className="far fa-save" />Update</button>
                                <button onClick={this.onCloseEditForm} type="button" className="btn btn-primary"><i className="fas fa-times" />Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onUpdateData: (note, index) => dispatch({type: "EDIT_NOTE", note: note, index: index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);