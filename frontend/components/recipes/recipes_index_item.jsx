var React = require('react');
var History = require('react-router').History;

  var RecipesIndexItem = React.createClass({
    mixins: [History],

    showDetail: function () {
      this.history.pushState(null, '/recipes/' + this.props.recipe.id, {});
    },

    render: function () {
      return(
          <li onClick={this.showDetail}>
            <p>Dish: {this.props.recipe.title}</p>
            <p>Author: {this.props.recipe.author_name}</p>
          </li>
      );
    }
  });

module.exports = RecipesIndexItem;
