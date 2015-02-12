//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	/*this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(this.numberOfGuests.val());
	*/
	this.dishType = container.find("#dishType");

	this.dishList = container.find("#dishList");

	var dishes = model.getAllDishes(this.dishType.val());

	for(i = 0; i < dishes.length; i++ ) {
		this.dishList.append("<div class='col-md-3' id='dishItem'>"+
			"<div class='row'><img src='images/"+ dishes[i].image +"'/></div>"+
			"<div class='row'><h2>"+ dishes[i].name +"</h2></div>"+
			"<div class='row'><h3>"+ dishes[i].description +"</h3></div></div>");
	}
	
	
}
 
