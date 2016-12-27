import React from 'react';
import $ from 'jquery';

class Recipe extends React.Component{
  constructor(props){
    super(props);
    this.renderIngredients = this.renderIngredients.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  renderIngredients(ingredientArray){
    return ingredientArray.map((ingredient,index) => {
      return (
        <li key = {index}>{ingredient}</li>
      )
    });
  }
  handleClick(ID){
    var selector = "#" + ID;
    $(selector).toggle();
  }
  render(){
    var {name,ingredient} = this.props;
    var ID = this.props.ID;


    return(
      <div className = "recipe">
       <h3 onClick = { () => {this.handleClick(ID)} }>{name}</h3>
       <div id = {ID} className = "recipe-ingredients">
         <h4>Ingredients</h4>
         <ul>{this.renderIngredients(ingredient)}</ul>
       </div>
      </div>
    );
  }
}

export default Recipe;
