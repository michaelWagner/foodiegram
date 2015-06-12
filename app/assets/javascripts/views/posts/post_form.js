Foodiegram.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    "click .post-upload-button": "upload"
  },

  upload: function() {
    filepicker.pick(function(blob) {
      var newImage = new Foodiegram.Models.Post({
        image_url: blob.url
      });
      newImage.save({}, {
        success: function() {
          alert('image saved');
        }
      });
    });
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
