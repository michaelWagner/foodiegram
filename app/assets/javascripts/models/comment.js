Foodiegram.Models.Comment = Backbone.Model.extend({
  urlRoot: "api/comments",
  
  parse: function (response) {
    if (response.author) {
      this.author().set(response.author);
      delete response.author;
    }
    return response;
  }
});
