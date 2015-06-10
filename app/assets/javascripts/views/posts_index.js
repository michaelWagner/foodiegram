Foodiegram.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  className: 'posts-index',

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      posts: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
