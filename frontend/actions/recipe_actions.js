var Dispatcher = require('../dispatcher/dispatcher.js');
var RecipeConstants = require('../constants/recipe_constants.js');


var RecipeActions = {
  receiveAllRecipes: function (recipes) {
    Dispatcher.dispatch({
      actionType: RecipeConstants.RECIPES_RECEIVED,
      recipes: recipes
    });
  },

  receiveRecipe: function (recipe) {
    Dispatcher.dispatch({
      actionType: RecipeConstants.RECIPE_RECEIVED,
      recipe: recipe
    });
  }
};

module.exports = RecipeActions;
