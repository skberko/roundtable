var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util.js');
var StepStore = require('../../stores/step_store.js');

var StepDetail = React.createClass({
  getInitialState: function(){
    return { step: null };
  },

  getStepFromStore: function () {
    return StepStore.find(parseInt(this.props.params.stepId));
  },

  _onChange: function () {
    this.setState({step: this.getStepFromStore()});
  },

  componentDidMount: function(){
    ApiUtil.fetchStepsForRecipe(this.props.params.recipeId);
    this.stepListener = StepStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.stepListener.remove();
  },

  render: function () {
    var step = this.getStepFromStore() || this.state.step;
    if (step === null) { return <div></div>; }
    return(
      <div>{step.annotations[0].body}
      </div>
    );
  }

  // make external annotation form component, include it here
});

module.exports = StepDetail;
