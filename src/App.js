import React from 'react';
import Form from './components/form.js';
import Item from './components/item.js';
import EditItem from './components/edit-item.js';

import Items from './data/items.js';

import uuidv4 from 'uuid/v4';
import SweetAlert from 'sweetalert-react';
import './../node_modules/sweetalert/dist/sweetalert.css';

class App extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {
        items: Items,
        showAlert: false,
        titleAlert: '',
        idAlert: '',
        idEdit: '',
        nameEdit: '',
        valueItem: ''
    }
  }

  renderItem = () => {
    let {items, idEdit, nameEdit} = this.state;
    if(items.length === 0) {
      return <Item item={0} />
    }
    return items.map((item, index) => {
      if(item.id === idEdit) {
        return (
          <EditItem 
            key={index}
            nameEdit={nameEdit} 
            handleEditClickCancel={this.handleEditClickCancel}   
            handleEditInput={this.handleEditInput}
            handleEditClickSubmit={this.handleEditClickSubmit}      
          />
        )
      }
      return (
        <Item 
          index={index+1} 
          item={item} 
          key={item.id} 
          handleShowAlert={this.handleShowAlert}
          handleEditItem={this.handleEditItem}
        />
      )
    });
  }

  //hàm hiện popup
  handleShowAlert = (item) => {
    this.setState ({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item.id
    });
  }

  //hàm xóa
  handleDeleteItem = () => {
    let {idAlert, items} = this.state;
    if (items.length > 0) {
      for(let i = 0; i < items.length; i++) {
        if(items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
    }
    this.setState ({
      showAlert: false
    })
  }

  //hàm nhận thông tin item muốn sửa
  handleEditItem = (index, item) => {
    this.setState ({
      idEdit: item.id,
      nameEdit: item.name
    })
  }

  //hàm hủy sửa
  handleEditClickCancel = () => {
    this.setState ({
      idEdit: ''
    })
  }

  //hàm sửa tên
  handleEditInput = (value) => {
    this.setState ({
      nameEdit: value
    })
  }

  //hàm lưu sửa 
  handleEditClickSubmit = () => {
    let {items, idEdit, nameEdit} = this.state;
    if(items.length > 0) {
      for(let i = 0; i < items.length; i++) {
        if(items[i].id == idEdit) {
          items[i].name = nameEdit;
        }
      }
    }
    this.setState ({
      idEdit: ''
    })
  }

  //hàm đổi giá trị input
  handleFormInput = (value) => {
    this.setState ({
      valueItem: value
    })
  }

  //hàm Hủy thêm mới
  handleFormClickCancel = () => {
    this.setState ({
      valueItem: ''
    })
  }

  //hàm Submit thêm mới
  handleFormClickSubmit = () => {
    let {valueItem} = this.state;
    if(valueItem.trim() === 0) {
      return false;
    } 
    let newItem = {
      id: uuidv4(),
      name: valueItem
    };
    Items.push(newItem);
    this.setState ({
      item: Items,
      valueItem: ''
    });
  }

  render () {
  return (
    <div className="container">
      <SweetAlert 
        show = {this.state.showAlert}
        title= "Bạn có chắc muốn xóa?"
        showCancelButton
        onConfirm= {() => this.handleDeleteItem()}
        onCancel= {() => this.setState({ showAlert: false })}  
      />
	    <div className="page-header">
        <h1>Danh sách truyện</h1>
    </div>
	  <div className="row">
		  <div className="col-md-12">
        <Form 
          valueItem={this.state.valueItem}
          handleFormInput={this.handleFormInput}
          handleFormClickCancel={this.handleFormClickCancel}
          handleFormClickSubmit={this.handleFormClickSubmit}
        />
		  </div>
		  <table className="table table-hover mt-2">
			  <thead>
				  <tr>
					  <th style={{ width: '10%' }}>ID</th>
					  <th>Name</th>
					  <th style={{ width: '15%' }}>Actions</th>
				  </tr>
			  </thead>
			  <tbody>
          {this.renderItem()}
			  </tbody>
		  </table>
	  </div>
  </div>
  );
  }
}

export default App;
