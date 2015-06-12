Foodiegram.Views.UserEdit = Backbone.View.extend({
  template: JST['users/edit'],

  events: {
    "submit form": "updateProfile"
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
