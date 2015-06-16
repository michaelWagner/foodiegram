// Models extending this module must have a `likableOptions` property pointing
// to an object with the following attributes:
//   foreignKey (e.g., "photo_id")

LikesDemo.Mixins.Likable = {
  like: function () {
    if (!this._like) {
      // Parans may not be necessary here ->
      this._like = new Foodiegram.Models.Like();
    }
    return this._like;
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

  updateLikeCount: function (delta) {
    this.set("num_likes", this.get("num_likes") + delta);
  },

  parseLike: function (payload) {
    // Call this inside the model's #parse method.
    var attrs = {};
    attrs[this.likableOptions.foreignKey] = payload.id;
    this.like().set(attrs);

    if (payload.like) {
      this.like().set(payload.like);
      delete payload.like;
    }
  }
};
