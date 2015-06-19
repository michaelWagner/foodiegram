Foodiegram.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  posts: function () {
    if (!this._posts) {
      this._posts = new Foodiegram.Collections.Posts([], { user: this });
    }
    return this._posts;
  },

  label: function () {
      return this.get("username");
  },

  followings: function() {
    if (!this._followings) {
      this._followings = new Foodiegram.Collections.Followings([], { user: this });
    }
    return this._followings;
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

    if (response.followings) {
      this.followings().set(response.followings);
      delete response.followings;
    }

    if (response.followers) {
      this.followers().set(response.followers);
      delete response.followers;
    }

    return response;
  }
});
