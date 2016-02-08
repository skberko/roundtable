var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ApiUtil = require('../../util/api_util');
var RecipeStore = require('../../stores/recipe_store.js');
var RecipeActions = require('../../actions/recipe_actions.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Fuse = require('fuse.js');

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
  mixins: [LinkedStateMixin, require('react-onclickoutside')],

  getInitialState: function () {
    return {
      recipes: RecipeStore.all(),
      searchInput: ""
    };
  },

  _onChange: function () {
    this.setState({
      recipes: RecipeStore.all()
    });
  },

  clearSearchInput: function () {
    this.setState({
      searchInput: ""
    });
  },

  handleClickOutside: function(evt) {
    this.setState({
      searchInput: ""
    });
  },

  componentDidMount: function () {
    this.searchListener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllRecipes();
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },

  search: function () {
    var recipes = this.state.recipes;
    var recipeTitles = [];

    if (recipes.length > 0) {
      recipes.map(function (recipe) {
        recipeTitles.push(recipe.title);
      });
    }

    var fuseOptions = {
      caseSensitive: false,
      includeScore: false,
      shouldSort: true,
      threshold: 0.5,
      keys: ['title']
    };

    var fuse = new Fuse(recipeTitles, fuseOptions);

    if (fuse.search(this.state.searchInput).length > 0) {
      var fuseSearchResults = {};
      fuse.search(this.state.searchInput).forEach(function (result) {
        fuseSearchResults[result] = fuse.list[result];
      });

      return fuseSearchResults;
    } else {
      return false;
    }

  },

  render: function () {
    var searchResults = <div></div>;
    var searchList = "search-list";
    var url;

    if (this.search()) {
      searchList += "reveal";
      var userResults = this.search();
      searchResults = Object.keys(userResults).map(function (recipeId, idx) {
        url = "/recipes/" + (parseInt(recipeId) + 1);
        return (
          <div>
            <div className="search-result-item" key={idx}>
              <Link to={url} key={idx}>{userResults[parseInt(recipeId)]}</Link>
            </div>
          </div>);
      });
    }

    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-background-color">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand navbar-brand-color navbar-brand-custom-color" href="#">RoundTable</a>
          </div>
          <form className='navbar-form navbar-left collapse navbar-collapse' role='search'>
            <div className="search-bar">
               <div onSubmit={this.handleSubmit}>
                 <div className="search-parameter">
                   <input
                     type="text"
                     placeholder="Search recipes..."
                     valueLink={this.linkState('searchInput')} />
                 </div>
               </div>

               <div onClick={this.clearSearchInput} className={"search-list" + searchList}>
                 {searchResults}
               </div>

            </div>
          </form>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <SignOut/>
          </div>







        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
