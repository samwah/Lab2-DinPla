var WelcomeViewController = function(view, model) {
 
	 view.newDinnerButton.click(function(){
	 	model.activeView(1);
	 	//alert(model.getNumberOfGuests());

	 });
	 
}