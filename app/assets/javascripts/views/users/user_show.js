Foodiegram.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  events: {
    "click .edit-profile-button": "editProfile"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  editProfile: function() {
    Backbone.history
      .navigate("#/users/" + CURRENT_USER_ID + "/edit", { trigger: true });
  },

  render: function() {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  }
});
