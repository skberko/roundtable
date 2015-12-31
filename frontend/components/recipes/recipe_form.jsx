var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = ReactRouter.Link;

var RecipeForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      title: '',
      ingredients: '',
      steps: [{}],
      image_url: '',
      description: ''
    };
  },

  handleTypeChange: function(i, stepBody) {
    this.state.steps[i].body = stepBody;
    this.state.steps[i].display_idx = i;
    this.setState({ steps: this.state.steps });
  },


  handleNewStep: function (e) {
    e.preventDefault();
    this.state.steps.push({});
    this.setState({});
  },

  uploadImage: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({cloud_name: "dz5btfj9w", upload_preset: "d7fxl3so"}, function(error, results){
      if(!error){
        // this.props.postImage(results[0]);
        this.setState({ image_url: results[0].public_id });
      }
    }.bind(this));
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var recipe = {
      // this refers to the component (i.e. the form)
      title: this.state.title,
      ingredients: this.state.ingredients,
      steps_attributes: this.state.steps,
      image_url: this.state.image_url,
      author_id: this.state.author_id,
      description: this.state.description
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

    if (this.state.image_url === '') {
      var photoUrl = "http://res.cloudinary.com/dz5btfj9w/image/upload/w_90,h_90/" + "no-image_fjw1vh";
      var photoClass = "form-no-image";
    } else {
      photoUrl = "http://res.cloudinary.com/dz5btfj9w/image/upload/w_90,h_90/" + this.state.image_url;
      photoClass = "uploaded-form-image";
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="recipe_title">Dish (required):</label>
            <input
              type="text"
              id="recipe_title"
              valueLink={this.linkState("title")}/>
          </div>

          <div>
            <label htmlFor="recipe_description">Description (required):</label>
            <textarea
              type="text"
              id="recipe_description"
              valueLink={this.linkState("description")}
            />
          </div>

          <div>
            <label htmlFor="recipe_ingredients">Ingredients (required):</label>
            <textarea
              type="text"
              id="recipe_ingredients"
              valueLink={this.linkState("ingredients")}
            />
          </div>

          <div>
            <label htmlFor="recipe_steps">Steps (required):</label>

            {this.state.steps.map(function (step, i) {
              var stepLink = {
                value: this.state.steps[i].body,
                requestChange: this.handleTypeChange.bind(null, i)
              };

              return(<textarea
                key={i}
                type="text"
                id="recipe_steps"
                valueLink={stepLink}
              />);
            }.bind(this))}
            <button onClick={this.handleNewStep}>Add New Step</button>
          </div>

          <div>
            <button onClick={this.uploadImage}>Upload new image!</button>
          </div>
          <img className={photoClass} src = {photoUrl}></img>



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

// <label htmlFor="recipe_image_url">Photo URL:</label>
// <input
//   type="text"
//   id="recipe_image_url"
//   valueLink={this.linkState("image_url")}
// />
