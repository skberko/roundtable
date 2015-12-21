var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var AnnotationConstants = require('../constants/annotation_constants.js');
var AnnotationStore = new Store(Dispatcher);

var _annotations = {};

// prob do this whenever we switch recipes
var resetAnnotations = function (annotations) {
  _annotations = {};
  annotations.forEach(function (annotation) {
    _annotations[annotation.id] = annotation;
  });
  AnnotationStore.__emitChange();
};

var resetAnnotation = function (annotation) {
  _annotations[annotation.id] = annotation;
  AnnotationStore.__emitChange();
};

AnnotationStore.all = function () {
  var annotations = [];
  for (var id in _annotations) {
    if (_annotations.hasOwnProperty(id)) {
      annotations.push(_annotations[id]);
    }
  }
  return annotations;
};

AnnotationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case AnnotationConstants.ANNOTATION_RECEIVED:
      resetAnnotation(payload.annotation);
      break;
    case AnnotationConstants.ANNOTATIONS_RECEIVED:
      resetAnnotations(payload.annotations);
      break;
  }
};

window.AnnotationStore = AnnotationStore;

module.exports = AnnotationStore;
