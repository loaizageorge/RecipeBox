import React from 'react';
import Recipe from 'Recipe';
import RecipeAPI from 'RecipeAPI';

class RecipeList extends React.Component{
  constructor(props){
    super(props);
    this.displayRecipes = this.displayRecipes.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  updateState(){
    this.props.update();
  }

  displayRecipes(){
    var recipes = this.props.recipes;
    if(recipes.length === 0){
      return(
        <div className = "row center" >
        <h2>Add your favorite recipe below!</h2>
        </div>
      )
    } else {
      var recipeID = 0;
      return recipes.map((recipe) =>{
        recipeID++;
        return (
          <Recipe updateState = {this.updateState} key = {recipeID} {...recipe} ID = {recipeID} />
        )
      });
    };
  }
  render(){
    var recipes = this.props.recipes;
    return(
        <div className = "row recipes">
          {this.displayRecipes()}
        </div>
    );
  }
}

export default RecipeList;
