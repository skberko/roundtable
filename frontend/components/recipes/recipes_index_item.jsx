var React = require('react');
var History = require('react-router').History;

  var RecipesIndexItem = React.createClass({
    mixins: [History],

    getInitialState: function () {
      return({
        hover: false
      });
    },

    showDetail: function () {
      this.history.pushState(null, '/recipes/' + this.props.recipe.id, {});
    },

    hoverOn: function () {
      this.setState({hover: true});
    },

    hoverOff: function () {
      this.setState({hover: false});
    },

    render: function () {
      if (this.props.recipe.image_url === '') {
        var photoUrl = "http://res.cloudinary.com/dz5btfj9w/image/upload/w_250,h_250/" + "fork_and_knife_dstz1d";
      } else {
        photoUrl = "http://res.cloudinary.com/dz5btfj9w/image/upload/h_250/" + this.props.recipe.image_url;
      }

      var backgroundImage = {
        backgroundImage: "url(" + photoUrl + ")"
      };

      if (this.state.hover === false) {
          var recipeIndexItemClass = "recipe-index-item";
      } else {
        recipeIndexItemClass = "recipe-index-item-hover";
      }

      return(
          <li style={backgroundImage}
            className={recipeIndexItemClass}
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
            onClick={this.showDetail}>
            <div className="recipe-index-item-title-label">
              {this.props.recipe.title}
            </div>
            <div className="recipe-index-item-author-label">
              by: {this.props.recipe.author_name}
            </div>
          </li>
      );
    }
  });

module.exports = RecipesIndexItem;

// <div className="recipe-index-item-label-text">
//   <p>{this.props.recipe.title}</p>
//   <p>by: {this.props.recipe.author_name}</p>
// </div>
