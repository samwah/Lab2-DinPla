//ExampleViewController Object constructor
var MyDinnerController = function(view, model) {
 
	 view.plusButton.click(function(){
	 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 	//model.addDishToMenu(1);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });
	 
	 view.minusButton.click(function(){
	 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });

	$(document).on('click', '.remove_btn', function(){
		var removeid = $(this).attr("id");
		//console.log("id to remove " + removeid);
	   	model.removeDishFromMenu(removeid);       
		model.notifyObservers();
	});

	$(document).on('click', '.inspect_link', function(){
		model.inspectedItem = $(this).attr("id");
		model.activeView(3);     
		model.notifyObservers();
	});

	view.confirmDinner.click(function(){
	 	model.activeView(4);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	});
}