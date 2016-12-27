import React from 'react';
import Recipe from 'Recipe';

class RecipeList extends React.Component{
  constructor(props){
    super(props);
    this.displayRecipes = this.displayRecipes.bind(this);
  }
  displayRecipes(){
    var recipes = this.props.recipes;

    if(recipes.length === 0){
      return(
        <h2>Add your favorite recipe below!</h2>
      )
    } else {
      var recipeID = 0;
      return recipes.map((recipe) =>{
        recipeID++;
        return (
          <Recipe key = {recipeID} {...recipe} ID = {recipeID} />
        )
      });
    };
  }
  render(){
    var recipes = this.props.recipes;
    return(
      <div>
        {this.displayRecipes()}
      </div>
    );
  }
}

export default RecipeList;
