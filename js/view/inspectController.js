var InspectController = function(view, model) {

/*
	 view.dishType.on('change',function(){
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });
*/
	 view.goBack.click(function(){
	 	model.activeView(2);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });

	 view.confirmDish.click(function(){
	 	model.addDishToMenu(model.inspectedItem);
	 	model.activeView(2);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });

	$(document).on('click', '.inspectItem', function(){
		model.inspectedItem = $(this).attr("id");
		model.activeView(3);
		  
		model.notifyObservers();
	});


}