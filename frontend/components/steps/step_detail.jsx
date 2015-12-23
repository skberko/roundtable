var React = require('react');
var ReactRouter = require('react-router');

var StepDetail = React.createClass({


  render: function () {
    return(
      <div>{this.props.body}</div>
    );
  }
});

module.exports = StepDetail;
