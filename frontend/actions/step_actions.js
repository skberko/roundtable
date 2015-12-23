var Dispatcher = require('../dispatcher/dispatcher.js');
var StepConstants = require('../constants/step_constants.js');

var StepActions = {
  receiveSteps: function (steps) {
    Dispatcher.dispatch({
      actionType: StepConstants.STEPS_RECEIVED,
      steps: steps
    });
  }
};

module.exports = StepActions;
