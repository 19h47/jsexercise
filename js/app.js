// CONTROLLER

var App = function() {
	var _this = this;
	
	var cart = new Cart({
		selectorQty: '#cart-qty',
		selectorTotal: '#cart-total',
		selectorBtnEmpty: '.empty-cart'
	});
	
	this.products = new Products();

	$('.product')
		.each(function() {
			var $this = $(this);
			var product = new Product($this.data('name'), $this.data('price'));

			_this.products.add(product);
		})
		.on('click', '.add-to-cart', function(e) {
			var index = $(e.delegateTarget).index();
			var product = _this.products.getProductAt(index);

			cart.add(1, product.getPrice());
		})
		.on('click', '.product-img', function(e) {
			var index = $(e.delegateTarget).index();
			var product = _this.products.getProductAt(index);

			console.log(product.getName());
		});

};

$(function() {
	window.myapp = new App();
});