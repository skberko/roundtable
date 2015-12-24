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

// need to modify where this info comes from; testing on pizza step 1 for now:
  handleSubmit: function (e) {

    e.preventDefault();
    var annotation = {
      body: this.state.body,
      step_id: this.props.stepId
    };
    var returnToRegularRecipeView = function () {
      // should be callback to be passed into ApiUtil.createAnnotation
    };
    ApiUtil.createAnnotation(annotation, annotation.step_id, returnToRegularRecipeView.bind(this));
  },

  render: function () {
    return(
      <div>
        <form className="new-annotation"onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="annotation_body">Whatcha got to say?</label>
            <input
              type="text"
              id="annotation_body"
              valueLink={this.linkState("body")}/>
          </div>

          <input type="submit" value="Add Annotation!"></input>
        </form>
      </div>
    );
  }

});

module.exports = AnnotationForm;
