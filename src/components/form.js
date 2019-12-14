import React from 'react';

class Form extends React.Component {
    render () {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Thêm tiêu đề"
                        value={this.props.valueItem}
                        onChange={(event) => this.props.handleFormInput(event.target.value)}
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => this.props.handleFormClickSubmit()}
                >Thêm mới</button>
                <button 
                    type="button" 
                    className="btn btn-default"
                    onClick={() => this.props.handleFormClickCancel()}
                >Hủy thêm mới</button>
            </form>
        )
    }
}

export default Form;