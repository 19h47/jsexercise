// CONTROLLER

var Cart = function(options) {
	this.options = options;
	this.reset();

	var _this = this;

	$(this.options.selectorBtnEmpty).on('click', function() {
		_this.reset();
	});
};

Cart.prototype.add = function(qty, unit_price) {
	this.qty += qty;
	this.total += (qty * unit_price);

	this.refresh();
};

Cart.prototype.reset = function() {
	this.qty = 0;
	this.total = 0;

	this.refresh();
};

Cart.prototype.refresh = function() {
	$(this.options.selectorQty).text(this.qty);
	$(this.options.selectorTotal).text(this.total);
};
