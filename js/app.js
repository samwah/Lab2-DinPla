$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var previewView = new PreviewView($("#previewView"), model);
	var preperationView = new PreperationView($("#preperationView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var myDinnerView2 = new MyDinnerView2($("#myDinnerView2"), model);
	var oneDishView = new OneDishView($("#oneDishView"), model);

});