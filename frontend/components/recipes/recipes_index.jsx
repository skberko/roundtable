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

  scrollToRecipes: function () {
    var actualRecipeViewPlace = document.getElementById('inivisble-anchor');
    actualRecipeViewPlace.scrollIntoView();
  },

  render: function () {
    var backgroundImage = {
      backgroundImage: "url(http://res.cloudinary.com/dz5btfj9w/image/upload/w_2000,h_746/kitchen_panorama_xo60sb.jpg)"
    };


    return(
      <div className="test">

        <div className="hero">
          <div className="pithy-welcome-text">
            Your kitchen, annotated
          </div>
          <div className="roundtable-welcome-text">
            RoundTable lets you...
          </div>
          <ul className="welcome-list">
            <li className="welcome-list-item">Explore new recipes</li>
            <li className="welcome-list-item">Share your favorites</li>
            <li className="welcome-list-item">Read annotated tips on recipes from other cooks</li>
            <li className="welcome-list-item">Share tips on how to make recipes even better</li>
          </ul>

          <div className="hero-links">
            <a className="white-link" onClick={this.scrollToRecipes}>
              All recipes
            </a>
            <br/>
            <Link className="white-link" to="recipes/new">Add a new recipe</Link>
            <div className="white-arrow">▼</div>
          </div>
        </div>

        <div id="inivisble-anchor"></div>

        <div className="recipe-index-items-container">
          <ul className="recipe-index-items-list">{this.state.recipes.map(function (recipe) {
            return(<RecipesIndexItem key={recipe.id} recipe={recipe}/>);
          })}</ul>
          <br/>
          <div className="add-recipe-link-text">
            <Link to="recipes/new">Add New Recipe</Link>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = RecipesIndex;
