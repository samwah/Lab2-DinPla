//ExampleView Object constructor
var MyDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.pendingCost = container.find("#pendingCost");
	this.pendingList = container.find("#pendingList");

	
	//this.numberOfGuests.val(model.getNumberOfGuests());
	//this.numberOfGuests.html(this.numberOfGuests.val());

	model.addObserver(this);

	this.updateGuests = function() {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.numberOfGuests.html(this.numberOfGuests.val());
	};

	var updatePending = function() {

		//this.pendingList.innerHTML = "<ul>";
		var output = "<ul>";

		for (item in model.menu){

			output = output + "<li>"+model.menu[item].name+"</li>";

		}

		output = output + "</ul>";

		this.pendingList.innerHTML = output;

		//this.pendingList.append("</ul>");

		this.pendingCost.innerHTML = model.getTotalMenuPrice();
	};


	this.update = function(obj) {
		updateGuests();
		updatePending();
	};

	updateGuests();
	updatePending();

	this.update = function(obj) {
		this.updateGuests();
	};

	this.updateGuests();
	
}
 
