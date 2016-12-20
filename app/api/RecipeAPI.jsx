module.exports = {
  setRecipes: function(recipe){
    localStorage.setItem('_recipes',recipe);
    return recipe;
  },
  getRecipes: function(){
    var stringRecipes = localStorage.getItem('_recipes');
    return stringRecipes;
  }
}
