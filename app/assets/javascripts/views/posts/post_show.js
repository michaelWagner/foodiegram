Foodiegram.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  tagName: 'li',

  className: 'post',

  events: {
    "click .post-like-box": "toggleLike",
    "click .edit-post": "editPost",
    "click .delete-post": "deletePost"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, 'change:num_likes', this.render);
    this.listenTo(this.model, "change", this.render);
  },

  deletePost: function(event) {
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("#/users/" + CURRENT_USER_ID, { trigger: true });
  },

  editPost: function() {
    Backbone.history.navigate(
      "#posts/" + this.model.id + "/edit", { trigger: true }
    );
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  },

  render: function() {
    var content = this.template({
      like: this.model.like(),
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
