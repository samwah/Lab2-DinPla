$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var previewView = new PreviewView($("#previewView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var oneDishView = new OneDishView($("#oneDishView"), model);

});