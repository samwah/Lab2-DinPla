var SearchView = function (container, model) {


	model.addObserver(this);

	this.dishType = container.find("#dishType");
	this.dishList = container.find("#dishList");
	this.searchButton = container.find("#search");
	this.searchInput = container.find("#searchInput");

	
	this.updateSearch = function(obj){

		this.dishList.html("");
		//alert("BEFORE");
		//console.log("2: "+model.menuSearch);
		//model.getRecipeJsonSearch(this.searchInput.val());
		var dishes = obj;

		console.log(obj);
		//alert("AFTER");
		//console.log("3: "+model.menuSearch);
		console.log(dishes);
		//var dishes = model.getAllDishes(this.dishType.val(),this.searchInput.val());

		for(var i = 0; i < dishes.length; i++) {
			this.dishList.append("<div class='col-md-3'><div class='dishItem'>"+
				"<div class='row listItem imgCent'><a class='inspectItem' id='"+ dishes[i].RecipeID +"'><img src='images/"+ dishes[i].ImageURL +"' width='80%' height='80%'/></a></div>"+
				"<div class='row listItem pad'><h2>"+ dishes[i].Title +"</h2></div>"+
				"<div class='row listItem pad'><h6>"+ dishes[i].Cuisine +"</h6></div></div></div>");
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
		if (obj != undefined) {
			alert('OBJ FOUND');
			this.updateSearch(obj);		
		}
	
	}

	//this.updateSearch();
	this.update();
}