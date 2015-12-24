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
    return {recipe: this.getStateFromStore(),
      annotations: []
    };
  },

  componentDidMount: function () {
    // need to fetch recipe; and set listener on store for when recipe
    // actually arrives
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

  goToStepDetailPage: function (stepId) {
    // console.log("stepId is: " + stepId);
    var url = '/recipes/' + this.props.params.recipeId + '/steps/' + stepId;
    this.props.history.pushState(null, url);
  },

  _onChange: function () {
    this.setState({recipe: this.getStateFromStore()});
  },


  render: function () {
    if (this.state.recipe === undefined) { return <div></div>; }

    return(
      <div className="speech-container">
        <div>{this.state.recipe.title}</div>
        <div>Submitted by: {this.state.recipe.author_name}</div>
        <br></br>
        Ingredients:
        <article className="recipe-ingredients">{this.state.recipe.ingredients}</article>
        <br></br>
        <ol>
          Steps:
          {this.state.recipe.steps.map(function (step) {
            // passes in body as a prop to the StepDetail:
            return(<li  key={step.id} onClick={this.goToStepDetailPage.bind(null, step.id)}>{step.body}</li>);
          }.bind(this))}
        </ol>
        <br></br>
        <Link to="/">Back to All Recipes</Link>
        {this.props.children}
      </div>
    );
  }
});

module.exports = RecipeDetail;
