var Dispatcher = require('../dispatcher/dispatcher.js');
var AnnotationConstants = require('../constants/annotation_constants.js');

var AnnotationActions = {

  receiveStepAnnotations: function (annotations) {
    Dispatcher.dispatch({
      actionType: AnnotationConstants.STEP_ANNOTATIONS_RECEIVED,
      annotations: annotations
    });
  },

  receiveAnnotation: function (annotation) {
    Dispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_RECEIVED,
      annotation: annotation
    });
  }
};

module.exports = AnnotationActions;
