window.Foodiegram = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Foodiegram.Routers.Router({
      $rootEl: $('#main')
    });
    var navbar = new Foodiegram.Views.NavbarView({
      router: router
    });

    $('#navbar').html(navbar.render().$el);

    Backbone.history.start();
  }
};
