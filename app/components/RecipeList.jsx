import React from 'react';

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
      );
    } else {
      return (
      <h2>{recipes[0].name}</h2>
      );
    }


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
