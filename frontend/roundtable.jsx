var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
// entry to site thru root element:
var root = document.getElementById("root");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RecipesIndex = require('./components/recipes/recipes_index.jsx');
var RecipeForm = require('./components/recipes/recipe_form.jsx');
var RecipeDetail = require('./components/recipes/recipe_detail.jsx');
var StepAnnotation = require('./components/steps/step_annotation.jsx');
var NavBar = require('./components/navbar/navbar.jsx');


var App = React.createClass({
  render: function () {
    // navbar here
    return (
      <div>
        <NavBar/>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

// any components that are listed below are implicitly given History
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={RecipesIndex}/>
    <Route path="recipes/new" component={RecipeForm}/>
    <Route path="recipes/:recipeId" component={RecipeDetail}>
      <Route path="steps/:stepId" component={StepAnnotation}/>
    </Route>
  </Route>
);

// Router is always the route component; routes below are its children
ReactDOM.render(<Router>{routes}</Router>, root);
