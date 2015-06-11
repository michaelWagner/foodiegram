Foodiegram.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "root",
    "posts": "postsIndex",
    "posts/:id": "postShow",
    "users/:id": "userShow",
    "users": "usersIndex"

    // "users/:user_id/posts": "postsIndex",
    // "users/:user_id/posts/new": "newPost",
    // "users/:user_id/posts/:id": "postShow",
    // "users/:user_id/posts/:id/edit": "postEdit",
    // "feed/": "feedIndex",
    // "feed/:id": "feedShow"
  },

  root: function() {
    Backbone.history.navigate("#/users/" + CURRENT_USER_ID, { trigger: true });
  },

  postsIndex: function() {
    Foodiegram.Collections.posts.fetch();
    var postsIndex = new Foodiegram.Views.PostsIndex({
      collection: Foodiegram.Collections.posts
    });

    this._swapView(postsIndex);
  },

  postShow: function(id) {
    var post = Foodiegram.Collections.posts.getOrFetch(id);
    var postShow = new Foodiegram.Views.PostShow({
      model: post
    });

    this._swapView(postShow);
  },

  newPost: function() {
    var post = new Foodiegram.Models.Post();
    var postForm = new Foodiegram.Views.PostForm({
      model: post,
      collection: Foodiegram.Collections.posts
    });

    this._swapView(postForm);
  },

  userShow: function(id) {
    var user = Foodiegram.Collections.users.getOrFetch(id);
    var userShow = new Foodiegram.Views.UserShow({
      model: user
    });

    this._swapView(userShow);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
