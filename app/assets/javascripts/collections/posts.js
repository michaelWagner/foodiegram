Foodiegram.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',
  model: Foodiegram.Models.Post,

  comparator: function(model) {
    return model.get('created_at');
  },

  initialize: function(models, options) {
    if (options && options.user) {
      this.user = options.user;
    } else {
       this.user = new Foodiegram.Models.User();
    }
  },

  getOrFetch: function(id) {
    var post = this.get(id);

    if (!post) {
      post = new Foodiegram.Models.Post({ id: id });
      post.fetch({
        success: function() {
          this.add(post, { at: 0, merge: true });
        }.bind(this)
      });
    } else {
      post.fetch();
    }

    return post;
  }
});

Foodiegram.Collections.posts = new Foodiegram.Collections.Posts();
