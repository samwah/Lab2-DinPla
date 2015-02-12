//ExampleView Object constructor
var MyDinnerView2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.pending_items = container.find("#pending_items");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(this.numberOfGuests.val());


	this.dishType = container.find("#dishType");

	var dishes = model.getAllDishes("main dish","Meat balls");

	for(i = 0; i < dishes.length; i++) {
		var sum = 0;

		for(j = 0; j < dishes[i].ingredients.length; j++ ) {
			sum += dishes[i].ingredients[j].price;
		}

		this.pending_items.append("<div class='row'>"+
			"<div class='col-md-6'><h3>"+ dishes[i].name +"</h3></div>"+
			"<div class='col-md-2'><h3>"+ sum +"</h3></div>"+
			"<div class='col-md-2'><a class='btn' href='select_dish.html'>"+
			"<span class='glyphicon glyphicon-remove'></span></a></div></div>");



	}

}
 
