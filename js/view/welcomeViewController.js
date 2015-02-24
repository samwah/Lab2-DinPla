var WelcomeViewController = function(view, model) {
 
	 view.newDinnerButton.click(function(){
	 	model.activeView(2);
	 	//alert(model.getNumberOfGuests());

	 });
	 
}