var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = ReactRouter.Link;

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

  handleSubmit: function (e) {
    e.preventDefault();
    var recipe = {
      // this refers to the component (i.e. the form)
      title: this.state.title,
      body: this.state.body,
      image_url: this.state.image_url,
      author_id: this.state.author_id
    };
    var returnToIndexCallback = function () {
      // pushState is a history method
      // takes 3 params:
      // null; url; any data you want to pass, will become query string (pojo)
      this.props.history.pushState(null, "/");
    };
    ApiUtil.createRecipe(recipe, returnToIndexCallback.bind(this));
  },

  render: function () {
    return(
      <div>
        <form className="new-recipe" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="recipe_title">Dish (required):</label>
            <input
              type="text"
              id="recipe_title"
              valueLink={this.linkState("title")}/>
          </div>

          <div>
            <label htmlFor="recipe_body">Directions (required):</label>
            <textarea
              type="text"
              id="recipe_body"d
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

          <input type="submit" value="Add Recipe!"></input>
          <br/>
        </form>
        <br></br>
        <Link to="/">Back to All Recipes</Link>
      </div>
    );
  }
});

module.exports = RecipeForm;
