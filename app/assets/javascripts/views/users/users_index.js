Foodiegram.Views.UsersIndex = Backbone.View.extend({
  template: JST['users/index'],

  events: {
    "keyup .search-box": "findUsers"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  findUsers: function(event) {
    event.preventDefault();
    console.log($(event.currentTarget).serializeJSON());

  },

  render: function() {
    var content = this.template({
      users: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
