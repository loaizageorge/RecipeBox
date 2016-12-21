module.exports = {
  setRecipes: function(recipes){
    localStorage.setItem('_recipes',recipes);
    return recipes;
  },
  getRecipes: function(){
    var stringRecipes = localStorage.getItem('_recipes');

    if(stringRecipes == null || stringRecipes == undefined){
      console.log('Return empty array');
      return [];
    } else {
      console.log('Return stuff',stringRecipes);
    return stringRecipes;
    }
  }
}
