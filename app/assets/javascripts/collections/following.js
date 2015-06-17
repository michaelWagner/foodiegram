Foodiegram.Collections.Following = Backbone.Collection.extend({
  url: 'api/following',
  model: Foodiegram.Models.Follow,

  initialize: function(models, options) {
    if (options && options.user) {
      this.user = options.user;
    } else {
       this.user = new Foodiegram.Models.User();
    }
  },

  getOrFetch: function(id) {
    var following = this.get(id);

    if (!following) {
      following = new Foodiegram.Models.Follow({ id: id });
      following.fetch({
        success: function() {
          this.add(following, { merge: true });
        }.bind(this)
      });
    } else {
      following.fetch();
    }

    return following;
  }
});
