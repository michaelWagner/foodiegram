Foodiegram.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  events: {
    "click .edit-profile-button": "editProfile",
    "click .follow-user-button": "toggleFollow"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  editProfile: function() {
    Backbone.history
      .navigate("#/users/" + CURRENT_USER_ID + "/edit", { trigger: true });
  },

  follow: function () {
    if (!this._follow) {
      this._follow = new Foodiegram.Models.Like();
    }
    return this._follow;
  },

  toggleFollow: function() {
    if (this.follow().isNew()) {
      this.createLike();
    } else {
      this.destroyLike();
    }
  },


  createLike: function () {
    this.like().save({}, {
      success: function () {
        this.updateLikeCount(1);
      }.bind(this)
    });
  },

  destroyLike: function () {
    this.like().destroy({
      success: function (model) {
        model.unset("id");
        this.updateLikeCount(-1);
      }.bind(this)
    });
  },

  toggleLike: function () {
    if (this.like().isNew()) {
      this.createLike();
    } else {
      this.destroyLike();
    }
  },

  render: function() {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  }
});
