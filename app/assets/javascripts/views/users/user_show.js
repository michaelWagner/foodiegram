Foodiegram.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  events: {
    "click .edit-profile-button": "editProfile",
    "click .follow-user-button": "toggleFollow"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  addButton: function() {
    var button = $('<button>').addClass('btn btn-primary');
    if (this.model.id === CURRENT_USER_ID) {
      button.addClass('edit-profile-button')
        .text('Edit Profile');
    } else {
      button.addClass('follow-user-button');
      if (this.model.followers().get(CURRENT_USER_ID)) {
        button.text('Unfollow');
      } else {
        button.text('Follow');
      }
    }
    $('.profile-button').html(button);
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

  toggleFollow: function() {
    if (this.model.followers().get(CURRENT_USER_ID)) {
      var following = new Foodiegram.Collections.Followings();
      this._follow = following.getOrFetch(CURRENT_USER_ID);
      this.destroyFollow();
    } else {
      this._follow = null;
      this.createFollow();
    }
    $('.follow-user-button').remove();
    this.render();
  },

  createFollow: function () {
    this.follow().save({ followed_id: this.model.id }, {
      success: function () {
        this.model.followers().add(this.follow());
        this.model.fetch();
        // $(".profile-button").text("Unfollow");
      }.bind(this)
    });
  },

  destroyFollow: function () {
    this.follow().destroy({
      success: function() {
        this.model.followers().remove(this.follow());
        this.model.fetch();
      }.bind(this)
    });
  },

  render: function() {
    var content = this.template({
      user: this.model
    });

    this.$el.html(content);
    this.addButton();
    return this;
  }
});
