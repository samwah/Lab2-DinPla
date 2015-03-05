var SearchController = function(view, model) {

/*
	 view.dishType.on('change',function(){
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });
*/

	 view.searchButton.click(function(){
	 	//
	 	//model.notifyObservers();
	 	model.getRecipeJsonSearch(view.searchInput.val());
	 	view.updateSearch(); //DISCLAIMER FIX THIS DIRTY BRO
	 });

	$(document).on('click', '.inspectItem', function(){
		model.inspectedItem = $(this).attr("id");
		model.activeView(3);
	});


}