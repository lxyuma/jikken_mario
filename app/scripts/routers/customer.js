define([
	'backbone',
  'views/item/login'
],
function(Backbone, LoginView){
    'use strict';

	return Backbone.Router.extend({
		/* Backbone routes hash */
		routes: {"login"  :  "login"},
    login : function(){
      Backbone.$('body').html(new LoginView().render().el);

      console.log('hit!!!');
    }
	});
});
