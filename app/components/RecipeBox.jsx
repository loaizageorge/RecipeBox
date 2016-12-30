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
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit(recipe){
    if(this.state.recipes === '[]'){
      this.setState({
        recipes: [
          {
            name: recipe.name,
            ingredient: recipe.ingredient
          }
        ]
      });
    } else {
    this.setState({
      recipes: [
        ...this.state.recipes,
        {
          name: recipe.name,
          ingredient: recipe.ingredient
        }
      ]
    });
    }
  }
  handleDelete(){
    this.setState({
      recipes: RecipeAPI.getRecipes()
    });
  }
  componentDidUpdate(prevProps, prevState){
    RecipeAPI.setRecipes(this.state.recipes);
  }
  render(){
    var recipes = this.state.recipes;
    return(
      <div className = "container">
        <h1>RecipeBox</h1>
        <RecipeList onDelete = {this.handleDelete}  recipes = {recipes}/>
        <AddRecipe onSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default RecipeBox;
