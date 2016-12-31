import React from 'react';
import RecipeAPI from 'RecipeAPI';
import {Modal} from  'react-bootstrap';
import {Button} from  'react-bootstrap';

class AddRecipe extends React.Component{
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
  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.name.value === '' || this.refs.ingredient.value === ''){
      alert('Please fill out both name and ingredient fields.');
    } else {
    var recipe = {
      'name' : this.refs.name.value,
      'url' : this.refs.url.value  ? this.refs.url.value :'http://www.greensngrills.com/assets/images/site/itemplaceholder.jpg',
      'ingredient': this.refs.ingredient.value.split(',')
    };
    this.refs.name.value = '';
    this.refs.url.value = '';
    this.refs.ingredient.value = '';
    this.props.onSubmit(recipe);
    this.setState({showModal:false});
    }
  }
  render(){
    return(
      <div>
        <div>
          <button type = "button" className = "btn btn-primary" onClick = {this.open}> Add recipe </button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Add recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <form className = "add-form">
                <small>Items with an asterisk(*) are required</small>
                <div className = "form-group">
                  <label className = "sr-only" for = "form-name">Recipe</label>
                  Recipe*<input id = "form-name" className = "add-recipe-input"  type = "text" ref = "name"  placeholder = "Recipe name: e.g. Apple Pie"/>
                </div>
                <div className = "form-group">
                  <label className = "sr-only" for = "form-name">URL of image</label>
                  URL <input id = "form-url" className = "add-recipe-input"  type = "text" ref = "url" placeholder = "URL of image: e.g. www.somewebsite/someimage.png"/>
                </div>
                <div className = "form-group">
                  <label className = "sr-only" for = "form-ingredients">Ingredients</label>
                  Ingredients*<input id = "form-ingredients" className = "add-recipe-input" rows = "5" ref = "ingredient" placeholder ="Ingredients seperated by a comma: e.g. eggs,milk,flour"/>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer className = "modal-footer">
              <button onClick={this.close}>Close</button>
              <button onClick={this.handleSubmit}>Submit</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
  }



export default AddRecipe;
