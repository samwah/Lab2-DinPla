//ExampleView Object constructor
var MyDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.Debug = container.find("#Debug");

	
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(this.numberOfGuests.val());

	model.addObserver(this);
	this.Debug.html(model.observers[1]);


	var updateGuests = function() {
		this.numberOfGuests = model.getNumberOfGuests();
	};


	var update = function(obj) {
		updateGuests();
	};

	update();
}
 
