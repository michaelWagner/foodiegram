Foodiegram.Views.UsersIndex = Backbone.CompositeView.extend({
  template: JST['users/index'],

  events: {
    "keyup .search-box": "removeAllUsers",
    "click .search-by-users": "searchUsers",
    "click .search-by-tag": "searchTags"
  },

  addUserIndexItemView: function (user) {
    var userIndexItem = new Foodiegram.Views.UserIndexItem({
      model: user
    });
    this.addSubview('.users-index', userIndexItem);
  },

  removeUserSearchView: function (user) {
    this.removeModelSubview('.users-index', user);
  },

  removeAllUsers: function(event) {
    if (this.searchResults) {
      this.searchResults.each(function(user) {
        this.removeUserSearchView(user);
      }.bind(this));
    }

    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    } else {
      this.searchForInput(event);
    }
  },

  searchForInput: function(event) {
    event.preventDefault();
    var that = this;
    var input = $(event.currentTarget).serializeJSON();
    if (that.collection.search(input.username)) {
      that.searchResults = that.collection.search(input.username);
      that.searchResults.each(function(user) {
        that.addUserIndexItemView(user);
      });
    }
  },

  render: function() {
    var content = this.template({
      users: this.searchResults
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
