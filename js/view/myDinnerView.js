//ExampleView Object constructor
var MyDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.Debug = container.find("#Debug");
	
	//this.numberOfGuests.val(model.getNumberOfGuests());
	//this.numberOfGuests.html(this.numberOfGuests.val());

	model.addObserver(this);

//<<<<<<< HEAD
	this.updateGuests = function() {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.numberOfGuests.html(this.numberOfGuests.val());
//=======
//	var updateGuests = function() {
//		//this.numberOfGuests.val(model.getNumberOfGuests());
//>>>>>>> origin/Lab3
	};

	this.update = function(obj) {
		this.updateGuests();
	};

	this.updateGuests();
}
 
