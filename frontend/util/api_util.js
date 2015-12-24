var RecipeActions = require('../actions/recipe_actions.js');
var AnnotationActions = require('../actions/annotation_actions.js');
var StepActions = require('../actions/step_actions.js');

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

  fetchStepsForRecipe: function (recipeId) {
    $.ajax({
      url: "api/steps/",
      dataType: "json",
      data: {recipeId: recipeId},
      success: function (steps) {
        console.log(steps);
        StepActions.receiveSteps(steps);
      }
    });
  },

  fetchStepAnnotations: function (stepId) {
    $.ajax({
      url: "api/steps/" + stepId + "/annotations",
      success: function (annotations) {
        AnnotationActions.receiveStepAnnotations(annotations);
      }
    });
  },

  createAnnotation: function (annotation, stepId, callback) {
    $.ajax({
      url: "api/steps/" + stepId + "/annotations",
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
        alert("Your annotation can't be blank!");
      }
    });
  }

};

// require in window to test ajax requests:
window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
