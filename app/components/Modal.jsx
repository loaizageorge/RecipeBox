import React from 'react';
import {Modal} from  'react-bootstrap';
import {Button} from  'react-bootstrap';

class MyModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  handleSubmit (e) {
    e.preventDefault();
    var recipe = {
      'name' : this.refs.name.value,
      'ingredient': this.refs.ingredient.value.split(',')
    };
    this.refs.name.value = '';
    this.refs.ingredient.value = '';
    this.props.submitModal(recipe);
  }
  render() {
    return (
      <div>
        <button type = "button" className = "btn btn-primary" onClick = {this.open}> Add recipe </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className = "add-form">
              <div className = "form-group">
                <label className = "sr-only" for = "form-name">Recipe</label>
                <input id = "form-name" className = "add-recipe-input"  type = "text" ref = "name" placeholder = "Recipe name: e.g. Apple Pie"/>
              </div>
              <div className = "form-group">
                <label className = "sr-only" for = "form-ingredients">Ingredients</label>
                  <textarea id = "form-ingredients" className = "add-recipe-input" rows = "5" ref = "ingredient" placeholder ="Ingredients seperated by a comma: e.g. eggs,milk,flour"/>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close}>Close</button>
            <button onClick={this.handleSubmit}>Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default MyModal;
