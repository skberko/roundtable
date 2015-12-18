var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
// entry to site thru root element:
var root = document.getElementById("root");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
//temp require ApiUtil so I can test fetchAllRecipes in console:
// var ApiUtil = require('./util/api_util.js');
var RecipesIndex = require('./components/recipes/recipes_index.jsx');
var RecipeForm = require('./components/recipes/recipe_form.jsx');

var App = React.createClass({
  render: function () {
    return <div>{this.props.children}</div>;
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={RecipesIndex}/>
    <Route path="recipes/new" component={RecipeForm}/>
  </Route>
);

// Router is always the route comoonent; routes below are its children
ReactDOM.render(<Router>{routes}</Router>, root);
