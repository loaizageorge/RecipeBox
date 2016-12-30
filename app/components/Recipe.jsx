import React from 'react';
import RecipeAPI from 'RecipeAPI';

import {Modal} from  'react-bootstrap';
import {Button} from  'react-bootstrap';
import $ from 'jquery';

class Recipe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.renderIngredients = this.renderIngredients.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }

  renderIngredients(ingredientArray){
    if(ingredientArray == undefined){

    } else
    {
    return ingredientArray.map((ingredient,index) => {
      return (
        <li key = {index}>{ingredient}</li>
      )
    });
    }
  }
  handleToggle(ID){
    var selector = "#" + ID;
    $(selector).toggle();
  }
  handleDelete(ID){
    RecipeAPI.deleteRecipe(ID);
    this.props.updateState();
  }
  handleEdit(e){
    e.preventDefault();
    var recipe = {
      'name' : this.refs.name.value,
      'url' : this.refs.url.value,
      'ingredient': this.refs.ingredient.value.split(',')
    };
    var index = this.props.ID;
    RecipeAPI.editRecipe(index,recipe);
    this.setState({showModal:false});
    this.props.updateState();

  }
  render(){
    var {name,url,ingredient} = this.props;
    var ID = this.props.ID;

    return(
      <div className = "col-xs-12 col-sm-6 col-lg-4" >
        <div className = "recipe">
          <div className = "recipe-image">
            <img className = "img-responsive" src = {url}/>
          </div>
        <div className = "recipe-header">
          <h3  className = "recipe-name">{name}</h3>
          <button onClick = { () => {this.handleToggle(ID)} } className = "btn btn-info recipe-expand"> <i className="fa fa-chevron-down" aria-hidden="true"></i>Expand</button>
        </div>
         <div id = {ID} className = "recipe-ingredients">
           <h4>Ingredients</h4>
           <ul>{this.renderIngredients(ingredient)}</ul>
             <div className = "buttons">
               <button type = "button" className = "btn-primary" onClick = {this.open}><i className ="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
                 {/* Edit Modal */}
                 <Modal show={this.state.showModal} onHide={this.close}>
                   <Modal.Header closeButton>
                     <Modal.Title>Edit recipe</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                     <form className = "add-form">
                       <div className = "form-group">
                         <label className = "sr-only" for = "form-name">Recipe</label>
                         <input id = "form-name" className = "add-recipe-input"  type = "text" ref = "name" defaultValue = {name} placeholder = "Recipe name: e.g. Apple Pie"/>
                       </div>
                       <div className = "form-group">
                         <label className = "sr-only" for = "form-name">URL of image</label>
                         <input id = "form-url" className = "add-recipe-input"  type = "text" ref = "url" defaultValue = {url} placeholder = "URL of image: e.g. www.somewebsite/someimage.png"/>
                       </div>
                       <div className = "form-group">
                         <label className = "sr-only" for = "form-ingredients">Ingredients</label>
                           <textarea id = "form-ingredients" className = "add-recipe-input" rows = "5" ref = "ingredient" defaultValue = {ingredient} placeholder ="Ingredients seperated by a comma: e.g. eggs,milk,flour"/>
                       </div>
                     </form>
                   </Modal.Body>
                   <Modal.Footer>
                     <button onClick={this.close}>Close</button>
                     <button onClick={this.handleEdit}>Commit changes</button>
                   </Modal.Footer>
                 </Modal>
                {/* ==== End Modal ================ */}
               <button onClick = {() => {this.handleDelete(ID)} } className = "btn-danger"><i className ="fa fa-trash" aria-hidden="true"></i>Delete</button>
             </div>
         </div>

        </div>
      </div>
    );
  }
}

export default Recipe;
