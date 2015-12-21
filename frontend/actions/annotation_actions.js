var Dispatcher = require('../dispatcher/dispatcher.js');
var AnnotationConstants = require('../constants/annotation_constants.js');

var AnnotationActions = {

  receiveAllAnnotations: function (annotations) {
    Dispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATIONS_RECEIVED,
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
