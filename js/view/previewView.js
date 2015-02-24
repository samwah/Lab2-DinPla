//ExampleView Object constructor
var PreviewView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(this.numberOfGuests.val());

	this.dishType = container.find("#dishType");
	this.totalprice = container.find("#totalprice");
	this.dishList = container.find("#dishList");

	var dishes = model.getAllDishes(this.dishType.val());

	var totalsum = 0;

	for(i = 0; i < dishes.length; i++) {

		var sum = 0;

		for(j = 0; j < dishes[i].ingredients.length; j++ ) {
		sum += dishes[i].ingredients[j].price;
		}

		this.dishList.append("<div class='col-md-3'><div class='dishItem'>"+
			"<div class='row'><img src='images/"+ dishes[i].image +"'/></div>"+
			"<div class='row'><h2>"+ dishes[i].name +"</h2></div>"+
			"<div class='row'><h3>"+ sum*model.getNumberOfGuests() +" SEK</h3></div></div></div>");
		totalsum += sum*model.getNumberOfGuests();
	}

	this.totalprice.append("SEK "+totalsum);
	
	
}
 
