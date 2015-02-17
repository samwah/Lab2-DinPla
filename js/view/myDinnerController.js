//ExampleViewController Object constructor
var ExampleViewController = function(view, model ) {
 
 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
}


//VV Real code VV
var MyDinnerController = function(view,model) {
	view.continueButton.click(function(){
		
		//Gömmer/Visar förstasidan? Kanske "scrollar" ner till content
		view.MyDinnerView(view.togglePage()) 
	})
}