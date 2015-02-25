var WelcomeView = function (container, model) {

	model.addObserver(this);

	var numGuests = model.getNumberOfGuests();

	this.dishType = container.find("#dishType");
	this.totalprice = container.find("#totalprice");
	this.dishList = container.find("#dishList");


	this.updateOverView = function(){

		var dishes = model.getAllDishes(this.dishType.val());

		var totalsum = 0;

		for(i = 0; i < dishes.length; i++) {

			var sum = 0;
			for(j = 0; j < dishes[i].ingredients.length; j++ ) {
			sum += dishes[i].ingredients[j].price;
			}

			this.dishList.append("<div class='col-md-3'><div class='dishItem'>"+
				"<div class='row'><img src='images/"+ dishes[i].image +"'/></div>"+
				"<div class='row'><h2>"+ dishes[i].name +"</h2></div>"+
				"<div class='row'><h3>"+ sum*model.getNumberOfGuests() +" SEK</h3></div></div></div>");
			totalsum += sum*model.getNumberOfGuests();
		}

		this.totalprice.append("SEK "+totalsum);
	}

	this.hideView = function(){
		//this.test.css( "display", "none" );
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.updateView = function(){
		if (model.activeView()==4) {
			this.showView();
		} else {
			this.hideView();
		}
		console.log(model.activeView())

	}

	this.update = function(obj){
		this.updateView();
	}
	this.update();
}