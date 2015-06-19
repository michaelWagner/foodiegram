Foodiegram.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: Foodiegram.Models.User,

  currentStatus : function(status){
		return _(this.filter(function(data) {
		  	return data.get("completed") == status;
		}));
	},

  search : function(letters){
    if (letters === "") {
      return this;
    }
    var pattern = new RegExp(letters,"gi");
    return _(this.filter(function(data) {
        return pattern.test(data.get("username"));
    }));
  },

  getOrFetch: function(id) {
    var user = this.get(id);

    if (!user) {
      user = new Foodiegram.Models.User ({ id: id });
      user.fetch({
        success: function() {
          this.add(user, { merge: true });
        }.bind(this)
      });
    } else {
      user.fetch();
    }

    return user;
  }
});

Foodiegram.Collections.users = new Foodiegram.Collections.Users();

// myapp.collection.Tasks = Backbone.Collection.extend({
// 	currentStatus : function(status){
// 		return _(this.filter(function(data) {
// 		  	return data.get("completed") == status;
// 		}));
// 	},
// 	search : function(letters){
// 		if(letters == "") return this;
//
// 		var pattern = new RegExp(letters,"gi");
// 		return _(this.filter(function(data) {
// 		  	return pattern.test(data.get("name"));
// 		}));
// 	}
// });
// // We instantiate our collection
// var myTasks = new myapp.collection.Tasks([task1,task2,task3]);
