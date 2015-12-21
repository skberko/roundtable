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

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    // need to fetch recipe; and set listener on store for when recipe
    // actually arrives
    ApiUtil.fetchRecipe(this.props.params.recipeId);
    this.recipeListener = RecipeStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
  },

  // this is what enables the RecipeDetail page to change which recipe it is
  // displaying after it has already been rendered before;
  // the componentWillReceiveProps method is triggered by the listener added;
  // to be triggered when the query string changes:
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchRecipe(newProps.params.recipeId);
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  render: function () {
    if (this.state.recipe === undefined) { return <div></div>; }

    // forces React to acknowledge newlines in user-submitted text
    var innerHHTML = this.state.recipe.body.replace(/\n/g, "<br>");

    return(
      <div>
        <div>Author name: {this.state.recipe.author_name}</div>
        <br></br>
        <div>{this.state.recipe.title}</div>
        <br></br>
        <div dangerouslySetInnerHTML={{__html: innerHHTML}}></div>
        <br></br>
        <Link to="/">Back to All Recipes</Link>
      </div>
    );
  }
});

module.exports = RecipeDetail;
