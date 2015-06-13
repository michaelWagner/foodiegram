Foodiegram.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    "submit form": "post",
    "click .add-image-button": "upload"
  },

  post: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.set({"body": params.body});
    this.model.save();
    this.collection.add(this.model);
    Backbone.history.navigate("#/posts" , { trigger: true });
  },

  upload: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    filepicker.pick(function(blob) {
      this.model.set({
        "author_id": CURRENT_USER_ID,
        "image_url": blob.url
      });
      this.model.save();
    }.bind(this));
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
