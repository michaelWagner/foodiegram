Foodiegram.Models.Post = Backbone.Model.extend({
  urlRoot: 'api/posts',

  likableOptions: {
    foreignKey: "post_id"
  },

  parse: function (payload) {
    this.parseLike(payload);
    return payload;
  },

  like: function () {
    if (!this._like) {
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
    var attrs = {};
    attrs[this.likableOptions.foreignKey] = payload.id;
    this.like().set(attrs);

    if (payload.like) {
      this.like().set(payload.like);
      delete payload.like;
    }
  }
});
