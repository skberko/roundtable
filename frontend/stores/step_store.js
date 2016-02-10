var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var StepConstants = require('../constants/step_constants.js');
var StepStore = new Store(Dispatcher);

var _steps = {};

var resetSteps = function (steps) {
  steps.forEach(function (step) {
    _steps[step.id] = step;
  });
};

StepStore.find = function (id) {
  return _steps[id];
};

StepStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case StepConstants.STEPS_RECEIVED:
      resetSteps(payload.steps);
      StepStore.__emitChange();
  }
};

module.exports = StepStore;
