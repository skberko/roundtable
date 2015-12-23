var React = require('react');
var RecipeStore = require('../../stores/recipe_store.js');
var ApiUtil = require('../../util/api_util.js');
var RecipesIndexItem = require('./recipes_index_item.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var RecipesIndex = React.createClass({
  getInitialState: function () {
    return { recipes: RecipeStore.all() };
  },

  _onChange: function () {
    this.setState({ recipes: RecipeStore.all() });
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllRecipes();
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
  },

  render: function () {
    return(
      <div>
        <p>Recipes:</p>
        <ul>{this.state.recipes.map(function (recipe) {
          return(<RecipesIndexItem key={recipe.id} recipe={recipe}/>);
        })}</ul>
        <br/>
        <Link to="recipes/new">Add New Recipe</Link>
      </div>
    );
  }

});

module.exports = RecipesIndex;
