Foodiegram.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',
  model: Foodiegram.Models.Post,

  // initialize: function(options) {
  //   if (options.user) {
  //     this.user = options.user;
  //   }
  // },

  getOrFetch: function(id) {
    var post = this.get(id);

    if (!post) {
      post = new Foodiegram.Models.Post({ id: id });
      post.fetch({
        success: function() {
          this.add(post);
        }
      });
    } else {
      post.fetch();
    }

    return post;
  }
});

Foodiegram.Collections.posts = new Foodiegram.Collections.Posts();
