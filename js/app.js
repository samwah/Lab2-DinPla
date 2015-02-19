$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	//test
	var exampleView = new ExampleView($("#exampleView"), model);
	//var exampleViewController = new ExampleViewController(exampleView,model);


	//not test

	//var welcomeView = new welcomeView($("#welcomeView"), model);
	//var welcomeViewController = new welcomeViewController(welcomeView,model);

	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var myDinnerController = new MyDinnerController(myDinnerView,model);


//old stuff
/*
	var previewView = new PreviewView($("#previewView"), model);
	var preperationView = new PreperationView($("#preperationView"), model);
	var myDinnerView2 = new MyDinnerView2($("#myDinnerView2"), model);
	var oneDishView = new OneDishView($("#oneDishView"), model);
*/
});