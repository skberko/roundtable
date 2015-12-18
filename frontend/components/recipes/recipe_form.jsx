var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');



var RecipeForm = React.createClass({
  mixins: [LinkedStateMixin],

  // contextTypes: {
  //   router: React.PropTypes.func
  // },

  blankAttrs: {
    title: '',
    body: '',
    image_url: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  render: function () {
    return(
      <form className="new-recipe" onSubmit={ApiUtil.createRecipe}>
        <div>
          <label htmlFor="recipe_title">Dish:</label>
          <input
            type="text"
            id="recipe_title"
            valueLink={this.linkState("title")}/>
        </div>

        <div>
          <label htmlFor="recipe_body">Directions:</label>
          <input
            type="text"
            id="recipe_body"
            valueLink={this.linkState("body")}
          />
        </div>

        <div>
          <label htmlFor="recipe_image_url">Photo URL:</label>
          <input
            type="text"
            id="recipe_image_url"
            valueLink={this.linkState("image_url")}
          />
        </div>

        <button>Add Recipe!</button>
        <br/>
      </form>
    );
  }
});

module.exports = RecipeForm;
