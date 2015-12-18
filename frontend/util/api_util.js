var ApiActions = require('../actions/recipe_actions.js');

var ApiUtil = {
  fetchAllRecipes: function () {
    $.ajax({
      // url comes from rake routes
      url: "api/recipes",
      success: function (recipes) {
        ApiActions.receiveAllRecipes(recipes);
      }
    });
  },

  // should below be?
  //   createRecipe: function (recipe, callback) {
  createRecipe: function (recipe) {
    $.ajax({
      url: "api/recipes",
      method: "POST",
      data: {recipe: recipe},
      success: function () {
        ApiActions.receiveRecipe(recipe);
      }
    })
  }

};

// require in window to test ajax requestzzz:
window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
