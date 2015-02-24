var SearchController = function(view, model) {

	 view.dishType.on('change',function(){
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });

}