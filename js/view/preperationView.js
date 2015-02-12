//ExampleView Object constructor
var PreperationView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(this.numberOfGuests.val());

	this.dishType = container.find("#dishType");
	this.dishList = container.find("#dishList");

	var dishes = model.getAllDishes(this.dishType.val());

	for(i = 0; i < dishes.length; i++) {

		this.dishList.append("<div class='row'>"+
			"<div class='dishItem'>"+
			"<div class='col-md-4'><img src='images/"+ dishes[i].image +"'/></div>"+
			"<div class='col-md-4'><div class='row'><h1>"+ dishes[i].name +"</h1></div>"+
			"<div class='row'><h3>"+ dishes[i].description +"</h3></div></div>"+
			"<div class='col-md-4'><div class='row'><h2>Preperation</h2></div>"+
			"<div class='row'><h3>"+ dishes[i].description +"</h3></div></div></div>"+
			"</div></div>");
	}

	
	
}
 
