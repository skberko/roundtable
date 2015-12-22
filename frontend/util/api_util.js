var RecipeActions = require('../actions/recipe_actions.js');
var AnnotationActions = require('../actions/annotation_actions.js');

var ApiUtil = {
  fetchAllRecipes: function () {
    $.ajax({
      // url comes from rake routes
      url: "api/recipes",
      success: function (recipes) {
        RecipeActions.receiveAllRecipes(recipes);
      }
    });
  },

  fetchRecipe: function (id) {
    $.ajax({
      url: "api/recipes/" + id,
      success: function (recipe) {
        RecipeActions.receiveRecipe(recipe);
      }
    });
  },

  createRecipe: function (recipe, callback, err) {
    $.ajax({
      url: "api/recipes",
      method: "POST",
      data: {recipe: recipe},
      success: function (dbAddedRecipe) {
        RecipeActions.receiveRecipe(dbAddedRecipe);
        callback && callback();
      },
      error: function (message) {
        alert("All required fields must be complete!");
        // console.log(message);
        // err && err();
      }
    });
  },

  fetchStepAnnotations: function (stepId) {
    $.ajax({
      url: "api/steps/" + stepId + "/annotations",
      success: function (annotations) {
        AnnotationActions.receiveAllAnnotations(annotations);
      }
    });
  },

  // fetchAllAnnotations: function (recipeId) {
  //   $.ajax({
  //     url: "api/recipes/" + recipeId + "/annotations",
  //     success: function (annotations) {
  //       AnnotationActions.receiveAllAnnotations(annotations);
  //     }
  //   });
  // },

  createAnnotation: function (annotation, callback) {
    $.ajax({
      url: "api/annotations",
      method: "POST",
      data: {annotation: annotation},
      success: function () {
        AnnotationActions.receiveAnnotation(annotation);
        // callback will be for something like if I want to return to regular
        // recipe view after adding a new annotation - to be done in the
        // annotation form view!
        callback && callback();
      },
      error: function (message) {
        alert("All required fields must be complete!");
      }
    });
  }

};

// require in window to test ajax requestzzz:
window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
