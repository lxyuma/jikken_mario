define([
	'backbone',
	'hbs!tmpl/item/login_tmpl'
],
function( Backbone, LoginTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Login ItemView");
		},
		
    	template: LoginTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
