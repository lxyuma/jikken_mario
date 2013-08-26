define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
  'routers/customer'
],

function( Backbone, Communicator, Welcome_tmpl, CustomerRouter ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
    Backbone.$(document.body).append($('<a>', {href: "#login", text: "toLogin"}));

    new CustomerRouter();
    Backbone.history.start()

		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
