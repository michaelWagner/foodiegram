Foodiegram.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    "click .add-image-button": "upload"
  },

  upload: function(event) {
    event.preventDefault();
    filepicker.pick(function(blob) {
      // var newImage = new Foodiegram.Models.Post({
      //   image_url: blob.url
      // });
      this.model.set({
        "author_id": CURRENT_USER_ID,
        "image_url": blob.url,
      });
      this.model.save();
    }.bind(this));
    Foodiegram.Collections.posts.add(this.model);
    Backbone.history.navigate("#/posts" , { trigger: true })

    // filepicker.setKey("AvC7z9BxTV6wa3wlqCpMwz");
    //
    // filepicker.pick(
    //   {
    //     mimetype: 'image/*',
    //     container: 'window',
    //     services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
    //   },
    //   function(Blob){
    //     console.log(JSON.stringify(Blob));
    //   },
    //   function(FPError){
    //     console.log(FPError.toString());
    //   }
    // );

    // filepicker.pick(
    //   function(Blob){
    //     console.log(Blob.url);
    //   }
    // );
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
