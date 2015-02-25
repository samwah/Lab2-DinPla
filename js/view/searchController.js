var SearchController = function(view, model) {

/*
	 view.dishType.on('change',function(){
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });
*/

	 view.searchButton.click(function(){
	 	model.notifyObservers();
	 });

	$(document).on('click', '.inspectItem', function(){
		model.inspectedItem = $(this).attr("id");
		model.activeView(3);
	});


}