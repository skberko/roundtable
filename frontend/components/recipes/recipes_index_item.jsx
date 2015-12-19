var React = require('react');

  var RecipesIndexItem = React.createClass({
    render: function () {
      return(
        <li>
          <p>Dish: {this.props.recipe.title}</p>
          <p>Author: AUTHOR TO BE INTERPOLATED HERE!</p>
        </li>
      );
    }
  });

module.exports = RecipesIndexItem;
