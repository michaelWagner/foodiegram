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
    filepicker.pick(
      {
        mimetype: 'image/*',
        cropRatio: 1,
        cropDim: [400, 400],
        imageDim: [400, 400],
        maxSize: "10485760",
        cropForce: [400, 400],
        services: ['COMPUTER', 'FACEBOOK', 'WEBCAM', 'INSTAGRAM', 'URL', 'GOOGLE_DRIVE', 'FLICKR', 'DROPBOX']
      },
      function(blob) {
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
    this.model.set({
      body: $('.post-form textarea').val(),
      image_url: $('.post-form .new-post img').attr('src')
    });
    this.model.save();

    // this.collection.add(this.model, { at: 0, merge: true });
    Backbone.history.navigate("#", { trigger: true });
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
