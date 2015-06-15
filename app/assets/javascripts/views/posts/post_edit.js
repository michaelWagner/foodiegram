Foodiegram.Views.PostEdit = Backbone.View.extend({
  template: JST['posts/edit'],

  className: 'edit-post-page',

  events: {
    "click .save-edits": "saveEdits",
    "click .edit-image-button": "changeImage"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  changeImage: function(event) {
    event.preventDefault();
    var that = this;
    var params = $(event.currentTarget).serializeJSON();
    filepicker.pick(function(blob) {
      that.model.set({
        "author_id": CURRENT_USER_ID,
        "image_url": blob.url,
      });
      that.model.save();
    });
  },

  saveEdits: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();

    this.model.set(params);
    this.model.save();

    this.collection.add(this.model, { at: 0, merge: true });
    Backbone.history.navigate("#/posts" , { trigger: true });
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
