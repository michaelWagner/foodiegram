Foodiegram.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "root",
    "posts": "postsIndex",
    "users": "usersIndex",
    "users/:id": "usersShow"

    // "users/:user_id/posts": "postsIndex",
    // "users/:user_id/posts/new": "newPost",
    // "users/:user_id/posts/:id": "postShow",
    // "users/:user_id/posts/:id/edit": "postEdit",
    // "feed/": "feedIndex",
    // "feed/:id": "feedShow"
  },

  postsIndex: function() {
    Foodiegram.Collections.posts.fetch();
    var postsIndex = new Foodiegram.Views.PostsIndex({
      collection: Foodiegram.Collections.posts
    });

    this._swapView(postsIndex);
  },

  newPost: function() {
    var post = new Foodiegram.Models.Post();
    var postForm = new Foodiegram.Views.PostForm({
      model: post,
      collection: Foodiegram.Collections.posts
    });

    this._swapView(postForm);
  },

  postShow: function(id) {
    var post = Foodiegram.Collections.posts.getOrFetch(id);
    var postShow = new Foodiegram.Views.PostShow({
      model: post
    });

    this._swapView(postShow);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
