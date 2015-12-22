var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = ReactRouter.Link;

var AnnotationForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    body: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var annotation = {
      body: this.state.body,
      start_idx: this.state.start_idx,
      end_idx: this.state.end_idx,
      author_id: this.state.author_id,
      recipe_id: this.state.recipe_id
    };
    var returnToRegularRecipeView = function () {
      // should be callback to be passed into ApiUtil.createAnnotation
    };
    ApiUtil.createAnnotation(annotation, returnToRegularRecipeView.bind(this));
  },

  

});

module.exports = AnnotationForm;
