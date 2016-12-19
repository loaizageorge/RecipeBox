import React from 'react';
import RecipeList from 'RecipeList';
import AddRecipe from 'AddRecipe';
import Recipe from 'Recipe';

class RecipeBox extends React.Component{
  render(){
    return(
      <div>
        <h1>Recipe Box</h1>
        <RecipeList/>
        <Recipe/>
        <AddRecipe/>
      </div>
    );
  }
}

export default RecipeBox;
