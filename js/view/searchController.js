var SearchController = function(view, model) {

/*
	 view.dishType.on('change',function(){
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });
*/

	 view.searchButton.click(function(){
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });

	$(document).on('click', '.inspectItem', function(){
		model.inspectedItem = $(this).attr("id");
		model.activeView(3);
		  
		model.notifyObservers();
	});


}