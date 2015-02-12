//ExampleView Object constructor
var OneDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	/*this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(this.numberOfGuests.val());
	*/
	this.dishType = container.find("#dishType");
	//this.ingredients = container.find("#ingredients");
	this.ingredients = container.find("#insert_ing");

	this.dishSpecific = container.find("#dishSpecific");
	this.totalprice = container.find("#totalprice");

	var dish = model.getDish(1);

	this.dishSpecific.append("<div class='dishItem'>"+
		"<div class='row'><h2>"+ dish.name +"</h2></div>"+
		"<div class='row'><img src='images/"+ dish.image +"'/></div>"+
		"<div class='row'><h3>"+ dish.description +"</h3></div></div>");

	var sum = 0;

	for(i = 0; i < dish.ingredients.length; i++ ) {
		sum += dish.ingredients[i].price
		this.ingredients.append("<div class='col-md-3'>"+dish.ingredients[i].quantity+""+dish.ingredients[i].unit+"</div>"+
		"<div class='col-md-6'>"+dish.ingredients[i].name+"</div>"+
		"<div class='col-md-1'>SEK</div>"+
		"<div class='col-md-1'>"+dish.ingredients[i].price+"</div>");
	}

	this.totalprice.append("SEK "+sum);

	
}
 
