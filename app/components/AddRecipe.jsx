import React from 'react';
import RecipeAPI from 'RecipeAPI';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var recipe = this.refs.recipe.value;
    this.refs.recipe.value = '';
    RecipeAPI.setRecipes(recipe);
    this.props.onSubmit();
  }
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit} >
          <div>
            Recipe<input type = "text" ref = "recipe" placeholder = "eg. Apple Pie"/>
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
