import React, { Component } from "react";
import {connect} from 'react-redux';
import axios from "axios";
import NoteItem from "../noteItem/NoteItem";
import NoteEdit from '../noteEdit/NoteEdit';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFill: null,
            dataSearch: []
        }
    }

    componentDidMount(){
        axios.get('https://5de46834712f9b0014513b56.mockapi.io/note/listNote')
        .then((res) => {
            this.props.initData(res.data);
            this.setState({
                dataSearch: res.data
            })
        });
    }

    autoFillEdit = (value) => {
        this.setState({
            dataFill: value
        })    
    }
    onCloseEditForm = (data, index) => {
        this.setState({
            dataFill: null
        })
        if(data){
            this.setState({
                dataSearch: Object.assign([...this.state.dataSearch], {[index]: data})
            })
        }
    }
    onSearch = e => {
        const dataSearch = this.props.data.filter(item => item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        this.setState({
            dataSearch: dataSearch
        })
    }
    onDelNoteItem = id => {
        axios({
            method: "DELETE",
            url: "https://5de46834712f9b0014513b56.mockapi.io/note/listNote/" + id
        }).then(() => {
            this.props.delData(id);
            this.setState({
                dataSearch: this.state.dataSearch.filter(item => item.id !== id)
            })
        })
    }
    renderNoteList = () => {
        return this.state.dataSearch.map((item, index) => <NoteItem key={index} onDelNoteItem={(id) => this.onDelNoteItem(id)} autoFillEdit={(value) => this.autoFillEdit(value)} index={index} dataItem={item} />)
    }

    render() {
        return (
            <>
            <div className="note-list">
                <div className="note-find">
                    <input onChange={e => this.onSearch(e)} type="text" placeholder="Search for note by title..." />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Updated Date</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderNoteList()}
                    </tbody>
                </table>
            </div>
            {this.state.dataFill && <NoteEdit dataNoteFill={this.state.dataFill} onCloseEditForm={this.onCloseEditForm} onChange={(changeData) => this.onChange(changeData)} />}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initData: data => dispatch({type: "SHOW_NOTE", data}),
        delData: id => dispatch({type: "DEL_NOTE", id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);