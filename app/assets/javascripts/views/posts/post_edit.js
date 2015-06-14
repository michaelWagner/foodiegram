Foodiegram.Views.PostEdit = Backbone.View.extend({
  template: JST['posts/edit'],

  className: 'edit-post-page',

  events: {
    "click .save-edits": "saveEdits"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  saveEdits: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();

    this.model.set(params);
    this.model.save();

    Backbone.history.navigate("#/users/" + CURRENT_USER_ID, { trigger: true });
  },

  render: function() {
    var content = this.template({
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});
