import React from 'react';

class Recipe extends React.Component{
  constructor(props){
    super(props);
    this.renderIngredients = this.renderIngredients.bind(this);
  }
  renderIngredients(ingredientArray){
    console.log(ingredientArray);
    return ingredientArray.map((ingredient,index) => {
      return (
        <li key = {index}>{ingredient}</li>
      )
    });
  }
  render(){
    var {name,ingredient} = this.props;
    return(
      <div>
       <h3>{name}</h3>
       <ul>{this.renderIngredients(ingredient)}</ul>
      </div>
    );
  }
}

export default Recipe;
