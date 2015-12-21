var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var RecipeConstants = require('../constants/recipe_constants.js');
var RecipeStore = new Store(Dispatcher);

//make _recipes a POJO, not an Array:
var _recipes = {};

var resetRecipes = function (recipes) {
  _recipes = {};
  recipes.forEach(function (recipe) {
    _recipes[recipe.id] = recipe;
  });
  RecipeStore.__emitChange();
};

var resetRecipe = function (recipe) {
  _recipes[recipe.id] = recipe;
  RecipeStore.__emitChange();
};

RecipeStore.all = function () {
  // console.log(_recipes);
  var recipes = [];
  for (var id in _recipes) {
    if (_recipes.hasOwnProperty(id)) {
      recipes.push(_recipes[id]);
    }
  }
  return recipes;
};

RecipeStore.find = function (id) {
  return _recipes[id];
};

RecipeStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:
      resetRecipes(payload.recipes);
      break;
    case RecipeConstants.RECIPE_RECEIVED:
      resetRecipe(payload.recipe);
      break;
  }
};

module.exports = RecipeStore;
