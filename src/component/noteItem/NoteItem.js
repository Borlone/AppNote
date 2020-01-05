import React, {Component} from "react";
import { connect } from "react-redux";

class NoteItem extends Component{

    onShowEditForm = () => {
        const noteItem = {...this.props.dataItem, index: this.props.index}
        this.props.autoFillEdit(noteItem);
        this.props.onShowEditForm();
    }
    onDelNoteItem = () => {
        this.props.onDelNoteItem(this.props.dataItem.id);
    }

    render(){
        return (
            <tr>
                <td>
                    <button onClick={this.onShowEditForm}><i className="fas fa-pencil-alt" /></button>
                    <button onClick={this.onDelNoteItem}><i className="fas fa-trash" /></button>
                </td>
                <td>{this.props.dataItem.title}</td>
                <td>{this.props.dataItem.content}</td>
                <td>{this.props.dataItem.updated}</td>
                <td>{this.props.dataItem.tags}</td>
            </tr>
        )
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        onShowEditForm: () => dispatch({type: "SHOW_EDIT"})
    }
}

export default connect(null,mapDispatchToProps)(NoteItem);