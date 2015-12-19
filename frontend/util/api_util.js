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

  fetchRecipe: function (id) {
    $.ajax({
      url: "api/recipes/" + id,
      success: function (recipe) {
        ApiActions.receiveRecipe(recipe);
      }
    });
  },

  createRecipe: function (recipe, callback, err) {
    $.ajax({
      url: "api/recipes",
      method: "POST",
      data: {recipe: recipe},
      success: function () {
        ApiActions.receiveRecipe(recipe);
        callback && callback();
      },
      error: function (message) {
        alert("All required fields must be complete!");
        // console.log(message);
        // err && err();
      }
    });
  }

};

// require in window to test ajax requestzzz:
window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
