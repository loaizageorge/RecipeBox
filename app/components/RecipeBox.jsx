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
  handleSubmit(recipe){
    if(this.state.recipes === '[]'){
      this.setState({
        recipes: [
          {
            name: recipe.name
          }
        ]
      });
    } else {
    this.setState({
      recipes: [
        ...this.state.recipes,
        {name: recipe.name}
      ]
    });
    }
  }
  componentDidUpdate(prevProps, prevState){
    RecipeAPI.setRecipes(this.state.recipes);
  }
  render(){
    var recipes = this.state.recipes;
    console.log(recipes);
    return(
      <div>
        <h1>RecipeBox</h1>
        <RecipeList recipes = {recipes}/>
        <Recipe/>
        <AddRecipe  onSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default RecipeBox;
