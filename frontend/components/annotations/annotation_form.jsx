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
      step_id: this.props.stepId
    };
    var updateStepDetail = function () {
      // should be callback to be passed into ApiUtil.createAnnotation
      ApiUtil.fetchStepsForRecipe(this.props.recipeId);
    };
    ApiUtil.createAnnotation(annotation, annotation.step_id, updateStepDetail.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function () {
    return(
      <div>
        <form className="new-annotation"onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="annotation_body">What do you want to add?</label>
            <br></br>
            <textarea
              className="annotation-form-text"
              id="annotation_body"
              valueLink={this.linkState("body")}/>
          </div>

          <input className="universal-button" type="submit" value="Add Annotation!"></input>
        </form>
      </div>
    );
  }

});

module.exports = AnnotationForm;
