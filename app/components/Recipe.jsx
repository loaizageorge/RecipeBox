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
      <div className = "col-md-4" >
        <div className = "recipe">
         <h3 className = "recipe-name">{name}</h3>
         <button onClick = { () => {this.handleClick(ID)} } className = "btn btn-info recipe-expand"> <i className="fa fa-chevron-down" aria-hidden="true"></i>Expand</button>
         <div id = {ID} className = "recipe-ingredients">
           <h4>Ingredients</h4>
           <ul>{this.renderIngredients(ingredient)}</ul>
             <div className = "buttons">
               <button className = "btn-primary"><i className ="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
               <button className = "btn-danger"><i className ="fa fa-trash" aria-hidden="true"></i>Delete</button>
             </div>
         </div>

        </div>
      </div>
    );
  }
}

export default Recipe;
