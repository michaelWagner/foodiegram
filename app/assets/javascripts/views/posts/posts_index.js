Foodiegram.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  className: 'posts-index',

  events: {
    "click .post-like-box": "toggleLike"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  toggleLike: function (event) {
    event.preventDefault();
    var postId = $(event.currentTarget).attr('data-id');
    var post = this.collection.get(postId);
    post.toggleLike();
    this.trigger('sync');
  },

  render: function() {
    var content = this.template({
      posts: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
