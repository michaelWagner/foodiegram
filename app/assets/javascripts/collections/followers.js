Foodiegram.Collections.Followers = Backbone.Collection.extend({
  url: 'api/followers',
  model: Foodiegram.Models.Follower,

  initialize: function(models, options) {
    if (options && options.user) {
      this.user = options.user;
    } else {
       this.user = new Foodiegram.Models.User();
    }
  },

  getOrFetch: function(id) {
    var follower = this.get(id);

    if (!follower) {
      follower = new Foodiegram.Models.Follower({ id: id });
      follower.fetch({
        success: function() {
          this.add(follower, { merge: true });
        }.bind(this)
      });
    } else {
      follower.fetch();
    }

    return follower;
  }
});
