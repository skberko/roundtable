var React = require('react');
var ReactDOM = require('react-dom');
var StepDetail = require('./step_annotation.jsx');
var History = require('react-router').History;


var StepDetail = React.createClass({
  mixins: [History],

  goToStepAnnotations: function (stepId) {
    // console.log("stepId is: " + stepId);
    var stepTop = $(ReactDOM.findDOMNode(this)).offset().top;
    var stepLeft = $(ReactDOM.findDOMNode(this)).offset().left;
    var stepWidth = $(ReactDOM.findDOMNode(this)).width();

    var url = '/recipes/' + this.props.recipeId + '/steps/' + stepId + '?top=' + stepTop + '&left=' + stepLeft + '&width=' + stepWidth;
    this.history.pushState(null, url);
  },

  render: function () {
    var stepId = this.props.stepId;
    var stepBody = this.props.stepBody;
    var stepDisplayIndex = this.props.stepDisplayIndex;

    return(
      <p  key={stepId} onClick={this.goToStepAnnotations.bind(null, stepId)}>
        {parseInt(stepDisplayIndex) + 1}. {stepBody}
      </p>
    );
  }
});

module.exports = StepDetail;
