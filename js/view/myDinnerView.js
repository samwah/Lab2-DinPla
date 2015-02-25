//ExampleView Object constructor
var MyDinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinner = container.find("#confirmDinner");
	this.pendingCost = container.find("#pendingCost");
	this.pendingList = container.find("#pendingList");
	this.pendingFirst = container.find("#pendingFirst");
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

			var sum = 0;
			for(i = 0; i<model.menu[item].ingredients.length; i++){
					sum += model.menu[item].ingredients[i].price;
				}

			output = output + "<div class='col-md-8'><a class='inspect_link' id="+model.menu[item].id+">"+model.menu[item].name+"</a></div>"+
			"<div class='col-md-4'> "+sum+""+
			"<button id='"+model.menu[item].id+"' class='remove_btn'>X</button>"+"</div>";

			console.log(model.menu[item].id);
		}

		output = output + "</ul>";
		this.pendingList.innerHTML = output;

		this.pendingCost.innerHTML = model.getTotalMenuPrice();

		if(model.getView() == 2){
			this.pendingFirst.innerHTML = 0;
		}
		else{
			this.pendingFirst.innerHTML = model.pendingPrice;
		}
	};


	this.update = function(obj) {
		this.updateGuests();
		updatePending();
	};

	//this.updateGuests();
	//updatePending();

}
 
