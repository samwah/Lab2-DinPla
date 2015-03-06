var SearchView = function (container, model) {


	model.addObserver(this);

	this.searchType = container.find("#dishType");
	this.dishList = container.find("#dishList");
	this.searchButton = container.find("#search");
	this.searchInput = container.find("#searchInput");

	
	this.updateSearch = function(obj){

		this.dishList.html("");
		//alert("BEFORE");
		//console.log("2: "+model.menuSearch);
		//model.getRecipeJsonSearch(this.searchInput.val());

		console.log(obj);
		//alert("AFTER");
		//console.log("3: "+model.menuSearch);

		//var dishes = model.getAllDishes(this.dishType.val(),this.searchInput.val());


		for(var i = 0; i < obj.length; i++) {
			
			var position = 33;
			var output = ['http://images.bigoven.com/image/upload/t_recipe-128/', obj[i].image.slice(position)].join('');

			this.dishList.append("<div class='col-md-3 dishItem'>"+
				"<div ><a class='inspectItem' id='"+ obj[i].id +"'><img src='"+ output +"'/></a></div>"+
				"<div ><h3>"+ obj[i].name +"</h3></div>"+
				"<div ><h6>"+ obj[i].type +"</h6></div></div>");
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
		//console.log("searchView: "+model.activeView())
	}

	this.update = function(obj){
		this.updateView();
		//console.log(obj);
		if (typeof obj !== 'undefined' && model.activeView()==2) {
			console.log('OBJ FOUND');
			this.updateSearch(obj);
		}
		else {
			console.log('else:undefined');
		}
		
	}

	//this.updateSearch();
	this.update();
}