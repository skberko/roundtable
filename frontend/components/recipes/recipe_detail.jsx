var React = require('react');
var ReactRouter = require('react-router');
var RecipeStore = require('../../stores/recipe_store.js');
var ApiUtil = require('../../util/api_util.js');
var Link = ReactRouter.Link;
var StepDetail = require('../steps/step_detail.jsx');


var RecipeDetail = React.createClass({

  getStateFromStore: function () {
    // how does find work? takes an argument from the query string?
    return RecipeStore.find(parseInt(this.props.params.recipeId));
  },

  getInitialState: function () {
    return {
      recipe: this.getStateFromStore(),
      annotations: []
    };
  },

  componentDidMount: function () {
    // need to fetch recipe; and set listener on store for when recipe
    // actually arrives
    window.scrollTo(0, 0);
    ApiUtil.fetchRecipe(this.props.params.recipeId);
    // ApiUtil.fetchAllAnnotations(this.props.params.recipeId);
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
    // ApiUtil.fetchAllAnnotations(newProps.params.recipeId);
  },

  _onChange: function () {
    this.setState({recipe: this.getStateFromStore()});
  },


  render: function () {
    if (this.state.recipe === undefined) { return <div></div>; }

    if (!(this.state.recipe.image_url)) {
      var imageUrl = "http://res.cloudinary.com/dz5btfj9w/image/upload/h_350/"
        + "fork_and_knife_dstz1d";
    } else {
      imageUrl = "http://res.cloudinary.com/dz5btfj9w/image/upload/h_350/"
      + this.state.recipe.image_url;
    }

    return(
      <div className="recipe-detail-container">

        <div className="recipe-title">{this.state.recipe.title}</div>

        <div className="recipe-author-info">
          Submitted by: {this.state.recipe.author_name}
        </div>

        <img className="recipe-image" src={imageUrl}></img>

        <article className="recipe-description">
          {this.state.recipe.description}
        </article>

        <div className="recipe-detail-label">Ingredients</div>
        <article className="recipe-ingredients-description">
          {this.state.recipe.ingredients}
        </article>

        <div className="recipe-steps-box">
          <div className="recipe-detail-label">Steps:</div>
            {this.state.recipe.steps.map(function (step) {
              // passes in body as a prop to the StepDetail:
              return(<StepDetail key= {step.id} recipeId={this.state.recipe.id} stepId={step.id} stepBody={step.body} stepDisplayIndex={step.display_idx} stepAnnotations={step.annotations}/>);
            }.bind(this))}
          <br></br>

          {this.props.children}
        </div>

        <div className="recipe-index-link">
          <Link to="/">Back to All Recipes</Link>
        </div>
      </div>
    );
  }
});

module.exports = RecipeDetail;
