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
  }

};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
