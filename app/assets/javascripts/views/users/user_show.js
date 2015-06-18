Foodiegram.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  events: {
    "click .edit-profile-button": "editProfile",
    "click .follow-user-button": "toggleFollow"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.followers(), "remove add", this.render);
    this.listenTo(this.model.followings(), "add", this.render);
  },

  editProfile: function() {
    Backbone.history
      .navigate("#/users/" + CURRENT_USER_ID + "/edit", { trigger: true });
  },

  follow: function () {
    if (!this._follow) {
      this._follow = new Foodiegram.Models.Follow();
    }
    return this._follow;
  },

  toggleFollow: function(event) {
    event.preventDefault();
    if (this.model.id !== CURRENT_USER_ID) {
      if (this.model.followers().get(CURRENT_USER_ID)) {
        var following = new Foodiegram.Collections.Followings();
        this._follow = following.getOrFetch(CURRENT_USER_ID);
        this.destroyFollow();
      } else {
        this.createFollow();
      }
    }
  },

  createFollow: function () {
    this.follow().save({ followed_id: this.model.id }, {
      success: function () {
        this.model.followers().add(this.follow());
        // $(".profile-button").text("Unfollow");
      }.bind(this)
    });
  },

  destroyFollow: function () {
    this.follow().destroy({
      success: function() {
        this.model.followers().remove(this.follow());
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
