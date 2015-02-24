//ExampleView Object constructor
var MyDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.pendingCost = container.find("#pendingCost");
	this.pendingList = container.find("#pendingList");
	this.buttonlist = [];
	console.log(this.minusButton);

	
	//this.numberOfGuests.val(model.getNumberOfGuests());
	//this.numberOfGuests.html(this.numberOfGuests.val());

	model.addObserver(this);

	this.updateGuests = function() {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.numberOfGuests.html(this.numberOfGuests.val());
	};

	var updatePending = function() {

		var output = "<ul>";

		for (item in model.menu){

			output = output + "<li>"+model.menu[item].name+
			" <button id='"+model.menu[item].id+"' class='remove_btn'>X</button>"+"</li>";

			console.log(model.menu[item].id);

			//this.buttonlist.push("asds");

			//this.buttonlist.push(""+model.menu[item].id);
			//console.log(this.buttonlist);
		}

		output = output + "</ul>";

		this.pendingList.innerHTML = output;

		//this.pendingList.append("</ul>");

		this.pendingCost.innerHTML = model.getTotalMenuPrice();
	};


	this.update = function(obj) {
		this.updateGuests();
		updatePending();
	};

	//this.updateGuests();
	//updatePending();

}
 
