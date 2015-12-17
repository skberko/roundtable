var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var RecipeConstants = require('../constants/recipe_constants.js');
var RecipeStore = new Store(Dispatcher);

//make _recipes a POJO, not an Array:
var _recipes = {};

var resetRecipes = function (recipes) {
  _recipes = {};
  console.log(recipes);
  recipes.forEach(function (recipe) {
    _recipes[recipe.id] = recipe;
  });
};

RecipeStore.all = function () {
  // console.log(_recipes);
  var recipes = [];
  for (var id in _recipes) {
    recipes.push(_recipes[id]);
  }
  return recipes;
}

RecipeStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:
      resetRecipes(payload.recipes)
      break;
  }

  RecipeStore.__emitChange();
};

module.exports = RecipeStore;
