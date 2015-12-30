var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var React = require('react');
var ApiUtil = require('../../util/api_util');

var SignOut = React.createClass({
  mixins: [ReactRouter.History],

  signOut: function(){
    ApiUtil.destroySession(CURRENT_USER_ID);
  },



  render: function() {
    return(
        <button className="btn btn-primary navbar-btn button-md pull-right"
                id="left-nav-button"
                onClick={this.signOut}>Sign Out</button>
    );
  }
});



var NavBar = React.createClass({


  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">

            <a className="navbar-brand" href="#">RoundTable</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <SignOut/>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
