import React from 'react';

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRecipes = this.setRecipes.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.submit();
  }
  setRecipes(){
    localStorage.setItem('_recipes','Cool cats');
  }
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit} >
          <div>
            Recipe<input type = "text" name = "recipe" placeholder = "eg. Apple Pie"/>
          </div>
          <div>
            Image URL<input type = "text" name = "img" placeholder = "eg. www.google.com/applepiepics"/>
          </div>
          <div>
            Ingredients<input type = "text" name = "ingredients" placeholder ="Enter ingredients seperated by a comma, for example: apple,pie"/>
          </div>
          <div>
          <input type = "submit" value = "Add Recipe"/>
          </div>
        </form>
      </div>
    );
  }
  }



export default AddRecipe;
