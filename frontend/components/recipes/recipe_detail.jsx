var React = require('react');
var ReactRouter = require('react-router');
var RecipeStore = require('../../stores/recipe_store.js');
var ApiUtil = require('../../util/api_util.js');
var Link = ReactRouter.Link;


var RecipeDetail = React.createClass({

  getStateFromStore: function () {
    // how does find work? takes an argument from the query string?
    return { recipe: RecipeStore.find(parseInt(this.props.params.recipeId)) };
  },

  componentWillMount: function () {
    // need to fetch recipe; and set listener on store for when recipe actually arrives
    ApiUtil.fetchRecipe(this.props.params.recipeId);
    this.recipeListener = RecipeStore.addListener(this._onChange);
  },

  // to be triggered when the query string changes:
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchRecipe(newProps.params.recipeId);
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  render: function () {
    if (this.state.recipe) {
      var dummyVariable = this.state.recipe.title;
    } else {
      dummyVariable = "";
    }

    return(
      <div>
        <div>Hai I'm the recipe detail!</div>
        <br></br>
        <div>{dummyVariable}</div>
        <Link to="/">Back to All Recipes</Link>
      </div>
    );
  }
});

module.exports = RecipeDetail;
