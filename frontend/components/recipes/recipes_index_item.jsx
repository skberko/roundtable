var React = require('react');

  var RecipesIndexItem = React.createClass({
    render: function () {
      return(
        <li>
          <p>Dish: {this.props.recipe.title}</p>
          <p>Directions: {this.props.recipe.body}</p>
        </li>
      )
    }
  });

module.exports = RecipesIndexItem
