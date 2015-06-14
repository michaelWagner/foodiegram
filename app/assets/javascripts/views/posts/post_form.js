Foodiegram.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  className: 'edit-post-page',

  events: {
    "submit form": "post",
    "click .add-image-button": "upload"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "change", this.render);
  },

  post: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.set(params);
    this.model.save();
    this.collection.add(this.model, { at: 0, merge: true });
    Backbone.history.navigate("#/posts" , { trigger: true });
  },

  upload: function(event) {
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
    debugger
    setTimeout(function() {
      $('div.new-post').html($('img').attr('src', params.image_url));
    }, 1500);
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
