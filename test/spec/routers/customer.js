(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/customer'
		],
		function( Customer ) {

			describe('Customer Router', function () {

				it('should be an instance of Customer Router', function () {
					var customer = new Customer();
					expect( customer ).to.be.an.instanceof( Customer );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );