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
      }
    });
  },

  fetchStepsForRecipe: function (recipeId) {
    $.ajax({
      url: "api/steps/",
      dataType: "json",
      data: {recipeId: recipeId},
      success: function (steps) {
        StepActions.receiveSteps(steps);
      }
    });
  },

  // fetchStepAnnotations: function (stepId) {
  //   $.ajax({
  //     url: "api/steps/" + stepId + "/annotations",
  //     success: function (annotations) {
  //       AnnotationActions.receiveStepAnnotations(annotations);
  //     }
  //   });
  // },

  createAnnotation: function (annotation, stepId, callback) {
    $.ajax({
      url: "api/steps/" + stepId + "/annotations",
      method: "POST",
      data: {annotation: annotation},
      success: function (newAnnotation) {
        callback && callback();
      },
      error: function (message) {
        alert("Your annotation can't be blank!");
      }
    });
  },

  destroySession: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function () {
        window.location = "/session/new";
      }
    });
  }

};

module.exports = ApiUtil;
