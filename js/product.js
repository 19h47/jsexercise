// MODEL

// Class Product
var Product = function(name, price) {
	this.name = name;
	this.price = parseFloat(price);
};

// Get price
Product.prototype.getPrice = function() {
	return this.price;
};

// Get name
Product.prototype.getName = function() {
	return this.name;
};
