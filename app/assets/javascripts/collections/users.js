Foodiegram.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: Foodiegram.Models.User,

  getOrFetch: function(id) {
    var user = this.get(id);

    if (!user) {
      user = new Foodiegram.Models.User ({ id: id });
      user.fetch({
        success: function() {
          this.add(user);
        }.bind(this)
      });
    } else {
      user.fetch();
    }

    return user;
  }
});

Foodiegram.Collections.users = new Foodiegram.Collections.Users();
