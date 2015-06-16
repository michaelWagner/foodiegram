Foodiegram.Models.Post = Backbone.Model.extend(
  _.extend({}, Foodiegram.Mixins.Likable, {
    urlRoot: 'api/posts',

    likableOptions: {
      foreignKey: "photo_id"
    },

    parse: function (payload) {
      this.parseLike(payload);
      return payload;
    }
  })
);
