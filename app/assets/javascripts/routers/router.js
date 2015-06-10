Foodiegram.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit",
    "feed/": "feedIndex",
    "feed/:id": "feedShow"
  },

  index: function() {
    Foodiegram.Collections.posts.fetch();
    var postsIndex = new Foodiegram.Views.PostsIndex({
      collection: Foodiegram.Collections.posts
    });

    this._swapView(postsIndex);
  },

  new: function() {
    var post = new Foodiegram.Models.Post();
    var postForm = new Foodiegram.Views.PostForm({
      model: post,
      collection: Foodiegram.Collections.posts
    });

    this._swapView(postForm);
  },

  show: function(id) {
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
