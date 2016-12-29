import React from 'react';
import RecipeAPI from 'RecipeAPI';
import MyModal from 'Modal';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var recipe = {
      'name' : this.refs.name.value,
      'ingredient': this.refs.ingredient.value.split(',')
    };
    this.refs.name.value = '';
    this.refs.ingredient.value = '';
    this.props.onSubmit(recipe);
  }
  openModal(){
    return(
      <Modal/>
    );
  }
  render(){
    return(
      <div>
            { /*<form className = "add-form" onSubmit = {this.handleSubmit} >
              <div className = "form-group">
                <label className = "sr-only" for = "form-name">Recipe</label>
                <input id = "form-name" className = "add-recipe-input"  type = "text" ref = "name" placeholder = "Recipe name: e.g. Apple Pie"/>
              </div>
              <div className = "form-group">
                <label className = "sr-only" for = "form-ingredients">Ingredients</label>
                  <textarea id = "form-ingredients" className = "add-recipe-input" rows = "5" ref = "ingredient" placeholder ="Ingredients seperated by a comma: e.g. eggs,milk,flour"/>
              </div>
              <div>
                Image URL<input type = "text" name = "img" placeholder = "eg. www.google.com/applepiepics"/>
              </div>
              <div>
                Ingredients<input type = "text" name = "ingredients" placeholder ="Enter ingredients seperated by a comma, for example: apple,pie"/>
              </div>
              <div className = "form-group">
              <input className = "btn btn-primary" type = "submit" value = "Add Recipe"/>
              </div>
            </form>*/}
            <MyModal/>
      </div>
    );
  }
  }



export default AddRecipe;
