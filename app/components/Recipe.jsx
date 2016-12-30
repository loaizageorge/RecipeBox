import React from 'react';
import RecipeAPI from 'RecipeAPI';
import RecipeBox from 'RecipeBox';
import $ from 'jquery';

class Recipe extends React.Component{
  constructor(props){
    super(props);
    this.renderIngredients = this.renderIngredients.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  renderIngredients(ingredientArray){
    if(ingredientArray == undefined){
      
    } else
    {
    return ingredientArray.map((ingredient,index) => {
      return (
        <li key = {index}>{ingredient}</li>
      )
    });
    }
  }
  handleAdd(ID){
    var selector = "#" + ID;
    $(selector).toggle();
  }
  handleDelete(ID){
    RecipeAPI.deleteRecipe(ID);
    this.props.delete();
  }
  render(){
    var {name,ingredient} = this.props;
    var ID = this.props.ID;

    return(
      <div className = "col-md-4" >
        <div className = "recipe">
          <img className = "img-responsive" src = "http://130.211.52.161/tradeo-content/themes/nucleare-pro/images/no-image-box.png"/>
         <h3 className = "recipe-name">{name}</h3>
         <button onClick = { () => {this.handleAdd(ID)} } className = "btn btn-info recipe-expand"> <i className="fa fa-chevron-down" aria-hidden="true"></i>Expand</button>
         <div id = {ID} className = "recipe-ingredients">
           <h4>Ingredients</h4>
           <ul>{this.renderIngredients(ingredient)}</ul>
             <div className = "buttons">
               <button className = "btn-primary"><i className ="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
               <button onClick = {() => {this.handleDelete(ID)} } className = "btn-danger"><i className ="fa fa-trash" aria-hidden="true"></i>Delete</button>
             </div>
         </div>

        </div>
      </div>
    );
  }
}

export default Recipe;
