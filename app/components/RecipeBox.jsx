import React from 'react';
import RecipeList from 'RecipeList';
import AddRecipe from 'AddRecipe';
import Recipe from 'Recipe';
import RecipeAPI from 'RecipeAPI';

class RecipeBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: RecipeAPI.getRecipes()
    };
  }
  submit(){
    console.log('submit');
    this.state = {
      recipes: RecipeAPI.getRecipes()
    };
    console.log(this.state.recipes);
  }
  render(){
    console.log('render');
    var recipes = this.state.recipes;
    return(
      <div>
        <h1>{recipes}</h1>
        <RecipeList/>
        <Recipe/>
        <AddRecipe  submit = {this.submit.bind(this)}/>
      </div>
    );
  }
}

export default RecipeBox;
