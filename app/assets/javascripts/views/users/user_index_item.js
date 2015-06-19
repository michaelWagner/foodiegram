Foodiegram.Views.UserIndexItem = Backbone.View.extend({
  template: JST['users/index_item'],

  tagName: 'li',

  className: 'user-index-item',

	render: function(user) {
		var content = this.template({
      user: this.model
    });
    this.$el.html(content);
		return this;
	}
});
