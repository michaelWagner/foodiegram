Foodiegram.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function() {
    this.collection.each(this.addPostView.bind(this));
    this.listenTo(this.collection, 'add', this.addPostView);
    this.listenTo(this.collection, 'remove', this.removePostView);
  },

  addPostView: function (post) {
    var postView = new Foodiegram.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', postView);
  },

  removePostView: function (post) {
    this.removeModelSubview('.posts', post);
  },

  render: function() {
    var content = this.template({
      posts: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
