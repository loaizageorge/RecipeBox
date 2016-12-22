import React from 'react';
import RecipeAPI from 'RecipeAPI';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit} >
          <div>
            Recipe<input type = "text" ref = "name" placeholder = "eg. Apple Pie"/>
          </div>
          <div>
            Ingredients<input type = "text" ref = "ingredient" placeholder ="Enter ingredients seperated by a comma eg. eggs,milk,flour"/>
          </div>
          {/*<div>
            Image URL<input type = "text" name = "img" placeholder = "eg. www.google.com/applepiepics"/>
          </div>
          <div>
            Ingredients<input type = "text" name = "ingredients" placeholder ="Enter ingredients seperated by a comma, for example: apple,pie"/>
          </div> */}
          <div>
          <input type = "submit" value = "Add Recipe"/>
          </div>
        </form>
      </div>
    );
  }
  }



export default AddRecipe;
