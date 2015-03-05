$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	//var exampleViewController = new ExampleViewController(exampleView,model);


	//not test

	//var welcomeView = new welcomeView($("#welcomeView"), model);
	//var welcomeViewController = new welcomeViewController(welcomeView,model);

	var inspectView = new InspectView($("#inspectView"), model);
	var inspectController = new InspectController(inspectView,model);

	var myDinnerView = new MyDinnerView($("#leftCol1"), model);
	var myDinnerController = new MyDinnerController(myDinnerView,model);

	var searchView = new SearchView($("#searchView"), model);
	var searchController = new SearchController(searchView,model);

	var overView = new OverView($("#overView"), model);
	var overController = new OverController(overView,model);
	
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	var welcomeController = new WelcomeController(welcomeView,model);

	var mainView = new MainView($("#mainView"), model);
	var mainController = new MainController(mainView,model);

//old stuff
/*
	var previewView = new PreviewView($("#previewView"), model);
	var preperationView = new PreperationView($("#preperationView"), model);
	var myDinnerView2 = new MyDinnerView2($("#myDinnerView2"), model);
	var oneDishView = new OneDishView($("#oneDishView"), model);
*/
});