var SearchView = function (container, model) {


	model.addObserver(this);

	this.dishType = container.find("#dishType");
	this.dishList = container.find("#dishList");
	this.searchButton = container.find("#search");




	

	this.updateSearch = function(){

		var dishes = model.getAllDishes(this.dishType.val());

		for(i = 0; i < dishes.length; i++) {
			this.dishList.append("<div class='col-md-3'><div class='dishItem'>"+
				"<div class='row'><a href='lasagne.html'><img src='images/"+ dishes[i].image +"'/></a></div>"+
				"<div class='row'><h2>"+ dishes[i].name +"</h2></div>"+
				"<div class='row'><h3>"+ dishes[i].description +"</h3></div></div></div>");
		}
	}

	this.hideView = function(){
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.updateView = function(){
		if (model.activeView()==2) {
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