Foodiegram.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  events: {
    "click .edit-profile-button": "editProfile",
    "click .follow-user-button": "toggleFollow"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.following, "change", this.render);
  },

  editProfile: function() {
    Backbone.history
      .navigate("#/users/" + CURRENT_USER_ID + "/edit", { trigger: true });
  },

  follow: function () {
    // debugger
    if (!this._follow) {
      this._follow = new Foodiegram.Models.Follow();
    }
    return this._follow;
  },

  toggleFollow: function(event) {
    event.preventDefault();
    if (this.model.id !== CURRENT_USER_ID) {
      if (this.model.followers().get(CURRENT_USER_ID)) {
        var following = new Foodiegram.Collections.Following();
        this._follow = following.getOrFetch(CURRENT_USER_ID);
        this.destroyFollow();
      } else {
        this.createFollow();
      }
    }
  },

  createFollow: function () {
    this.follow().save({}, {
      success: function () {
        console.log(this.model.followers().size());
      }.bind(this)
    });
  },

  destroyFollow: function () {
    this.follow().destroy({
      success: function (model) {
        // debugger
        console.log(this.model.followers().size());
      }.bind(this)
    });
  },

  render: function() {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  }
});
