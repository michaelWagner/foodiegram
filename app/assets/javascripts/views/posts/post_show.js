Foodiegram.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  tagName: 'li',

  className: 'post',

  events: {
    "click .post-like-box": "toggleLike",
    "keydown .post-comment": "handleKeyPress"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, 'change:num_likes', this.render);
    this.listenTo(this.model, 'change:comments', this.render);
    this.listenTo(this.model, "change", this.render);
  },

  deletePost: function(event) {
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate("#/users/" + CURRENT_USER_ID, { trigger: true });
  },

  editPost: function() {
    if (this.model.author_id === CURRENT_USER_ID) {
      Backbone.history.navigate(
        "#posts/" + this.model.id + "/edit", { trigger: true }
      );
    }
  },

  handleKeyPress: function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var params = $(event.currentTarget).serializeJSON();

      this.model.createComment(params.comment);
    }
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
