module.exports = {
  setRecipes: function(recipes){
    localStorage.setItem('_recipes',recipes);
    return recipes;
  },
  getRecipes: function(){
    var stringRecipes = localStorage.getItem('_recipes');
    return stringRecipes;
  }
}
