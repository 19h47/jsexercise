// MODEL

// Create an empty array named collection
var Products = function() {
	this.collection = [];
};

// Adding all product in collection
Products.prototype.add = function(product) {
	this.collection.push(product);
};

// Return index of product from collection
Products.prototype.getProductAt = function(index) {
	return this.collection[index];
};

// Get total of product's price from collection
Products.prototype.getTotal = function() {
	var total = 0;

	for (var i in this.collection) {
		total += this.collection[i].getPrice();
	}

	return total;
};

