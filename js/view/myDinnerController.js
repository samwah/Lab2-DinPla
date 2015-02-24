//ExampleViewController Object constructor
var MyDinnerController = function(view, model) {
 
	 view.plusButton.click(function(){
	 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());
	 });
	 
	 view.minusButton.click(function(){
	 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 	model.notifyObservers();
	 	//alert(model.getNumberOfGuests());

	 });


}


//VV Real code VV
//var MyDinnerController = function(view,model) {
	//view.continueButton.click(function(){
		
		//Gömmer/Visar förstasidan? Kanske "scrollar" ner till content
		//view.MyDinnerView(view.togglePage()) 
//	}