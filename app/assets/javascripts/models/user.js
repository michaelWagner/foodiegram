Foodiegram.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  posts: function () {
    if (!this._posts) {
      this._posts = new Foodiegram.Collections.Posts([], { user: this });
    }
    return this._posts;
  },

  following: function() {
    if (!this._following) {
      this._following = new Foodiegram.Collections.Following([], { user: this });
    }
    return this._following;
  },

  followers: function() {
    if (!this._followers) {
      this._followers = new Foodiegram.Collections.Followers([], { user: this });
    }
    return this._followers;
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts);
      delete response.posts;
    }

    if (response.following) {
      this.following().set(response.following);
      delete response.following;
    }

    if (response.followers) {
      this.followers().set(response.followers);
      delete response.followers;
    }

    return response;
  }
});
