(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/login'
		],
		function( Login ) {

			describe('Login Itemview', function () {

				it('should be an instance of Login Itemview', function () {
					var login = new Login();
					expect( login ).to.be.an.instanceof( Login );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );