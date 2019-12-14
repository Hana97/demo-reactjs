import React from 'react';

class EditItem extends React.Component {
    render () {
        return (
            <tr>
                <td>
                    {this.props.indexEdit}
                </td>
                <td>
                    <input 
                        type="text" 
                        className="form-control"
                        value= {this.props.nameEdit}
                        onChange= {(event) => this.props.handleEditInput(event.target.value)}
                    />
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => this.props.handleEditClickSubmit()}
                    >Lưu</button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick={() => this.props.handleEditClickCancel()}
                    >Hủy</button>
                </td>
            </tr>
        )
    }
}

export default EditItem;