import React from 'react';

class Item extends React.Component {
    render () {
        let {item, index} = this.props;
        return (
            <tr>
                <td>
                    {index}
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn"
                        onClick = {() => this.props.handleEditItem(index, item)}
                    >Sửa</button>
                    <button 
                        type="button" 
                        className="btn"
                        onClick = {() => this.props.handleShowAlert(item)}
                    >Xóa</button>
                </td>
            </tr>
        )
    }
}

export default Item;