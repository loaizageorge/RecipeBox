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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    this.setState({
      recipes: RecipeAPI.getRecipes()
    });
  }
  render(){
    console.log('render');
    var recipes = this.state.recipes;
    return(
      <div>
        <h1>{recipes}</h1>
        <RecipeList/>
        <Recipe/>
        <AddRecipe  onSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default RecipeBox;
