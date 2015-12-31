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
    var backgroundImage = {
      backgroundImage: "url(http://res.cloudinary.com/dz5btfj9w/image/upload/w_750,h_489/cutting_board_bg_nc56nq.jpg)"
    };

    return(
      <div className="test">

        <div style={backgroundImage} className="welcome-message-container">
          <div className="welcome-text">
            Welcome to RoundTable!
            <ul>
              <li>Expand your culinary horizons - Share and discover new dishes</li>
              <li>No more kitchen confusion -  Annotations guide you you understand recipes step by step</li>
            </ul>
          </div>
        </div>

        <div className="recipe-index-items-container">
          <p>Recipes:</p>
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
