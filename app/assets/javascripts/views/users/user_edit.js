Foodiegram.Views.UserEdit = Backbone.View.extend({
  template: JST['users/edit'],

  events: {
    "submit form": "updateProfile",
    "click .add-image-button": "changeProfileImage"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "change", this.render);
  },

  changeProfileImage: function(event) {
    event.preventDefault();
    var that = this;
    var params = $(event.currentTarget).serializeJSON();
    filepicker.pick(function(blob) {
      that.model.set({
        "profile_img_url": blob.url
      });
      that.model.save();
    });
  },

  updateProfile: function(event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON();
    this.model.set(params);
    this.model.save();

    Backbone.history.navigate("#/users/" + CURRENT_USER_ID, { trigger: true });
  },

  render: function() {
    var content = this.template({
      user: this.model,
      users: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
