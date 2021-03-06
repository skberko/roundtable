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
    return(
      <div className="test">

        <div className="hero">
          <div className="hero-transparent-text-div">
            <div className="pithy-welcome-text">
              Your kitchen, annotated
            </div>

            <div className="index-features">
              <div className="index-features-visible">
                <p className="index-features-perm-text">
                  RoundTable lets you
                </p>
                <ul className="index-features-list">
                  <li className="index-features-list-item">share and explore recipes</li>
                  <li className="index-features-list-item">read tips from other cooks</li>
                  <li className="index-features-list-item">share your own tips</li>
                </ul>
              </div>
            </div>




            <div className="hero-links">
              <a className="white-link" onClick={this.scrollToRecipes}>
                All recipes
              </a>
              <br/>
              <Link className="white-link" to="recipes/new">Add a new recipe</Link>
            </div>
          </div>


        </div>

        <div id="inivisble-anchor"></div>

        <div className="recipe-index-items-container">
          <ul className="recipe-index-items-list">{this.state.recipes.map(function (recipe) {
            return(<RecipesIndexItem key={recipe.id} recipe={recipe}/>);
          })}</ul>
          <br/>
          <div className="add-recipe-link-text">
            <Link to="recipes/new">Add a new recipe</Link>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = RecipesIndex;
