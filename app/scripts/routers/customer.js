define([
	'backbone'
],
function(Backbone){
    'use strict';

	return Backbone.Router.extend({
		/* Backbone routes hash */
		routes: {"login"  :  "login"},
    login : function(){
      console.log('hit!!!');
    }
	});
});
