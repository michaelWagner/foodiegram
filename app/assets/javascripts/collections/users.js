Foodiegram.Collections.Users = Backbone.Collection.extend({
  url: '/api/users',
  model: Foodiegram.Models.User,

});

Foodiegram.Collections.users = new Foodiegram.Collections.Users();
