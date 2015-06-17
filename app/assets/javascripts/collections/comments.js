Foodiegram.Collections.Comments = Backbone.Collection.extend({
  url: 'api/comments',

  model: Foodiegram.Models.Comment,

  initialize: function(models, options) {
    if (options && options.post) {
      this.post = options.post;
    } else {
       this.post = new Foodiegram.Models.Post();
    }
  },

  getOrFetch: function(id) {
    var comment = this.get(id);

    if (!comment) {
      comment = new Foodiegram.Models.Comment({ id: id });
      comment.fetch({
        success: function() {
          this.add(comment, { at: 0, merge: true });
        }.bind(this)
      });
    } else {
      comment.fetch();
    }

    return comment;
  }
});
