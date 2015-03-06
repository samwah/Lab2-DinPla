var InspectView = function (container, model) {


	model.addObserver(this);

	this.dishType = container.find("#dishType");
	this.ingredientsList = container.find("#insert_ing");
	this.dishSpecific = container.find("#dishSpecific");
	this.totalPrice = container.find("#totalprice");
	this.goBack = container.find("#goBack");
	this.confirmDish = container.find("#confirmDish");
	this.numPeople = container.find("#numPeople");
	
	this.updateInspect = function(obj){

		this.numPeople.val(model.getNumberOfGuests());
		this.numPeople.html("<h2>Ingredients for "+this.numPeople.val()+" people</h2>");

		this.dishSpecific.html("");
		this.totalPrice.html("");
		this.ingredientsList.html("");

		//model.getDish(model.inspectedItem);
		var dish = model.currentDish;
		console.log(dish);

		if(dish.desc == ''){
			dish.desc = 'No description was found!'
		}


		this.dishSpecific.append("<div class='inspectedItem'>"+
			"<div><h2>"+ dish.name +"</h2></div>"+
			"<div><img src='"+ dish.image +"' height='50%' width='50%'/></div>"+
			"<div><h3>"+ dish.desc +"</h3></div>"+
			"</div>");

		this.displayIngredients();

		//model.pendingPrice = sum*this.numPeople.val();
	}

	this.displayIngredients = function(){

		this.numPeople.val(model.getNumberOfGuests());
		this.numPeople.html("<h2>Ingredients for "+this.numPeople.val()+" people</h2>");
		this.totalPrice.html("");
		this.ingredientsList.html("");

		var dish = model.currentDish;
		var sum = 0;

		for(i = 0; i < dish.ingredients.length; i++ ) {
			var quant = parseFloat(dish.ingredients[i].MetricQuantity.toFixed(2));
			var quant2 = dish.ingredients[i].MetricQuantity;
			sum += quant2;
			this.ingredientsList.append("<div class='col-md-3'>"+quant*this.numPeople.val()+
			""+dish.ingredients[i].MetricUnit+"</div>"+
			"<div class='col-md-6'>"+dish.ingredients[i].IngredientInfo.Name+"</div>"+
			"<div class='col-md-1'>SEK</div>"+
			"<div class='col-md-2'>"+quant*this.numPeople.val()+"</div>");
		}

		this.totalPrice.append("SEK "+(sum*this.numPeople.val()).toFixed(2));
		model.setPendingPrice(sum);
	}

	this.hideView = function(){
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.updateView = function(){
		if (model.activeView()==3) {
			$("#dishSpecific").html("");
			$("#totalPrice").html("");
			$("#insert_ing").html("");
			this.showView();
		} else {
			this.hideView();
		}

		//console.log("inspectView: "+model.activeView())
	}

	this.update = function(obj){
		this.updateView();

		if (typeof obj !== 'undefined' && model.activeView()==3) {
			console.log('SOLO OBJ FOUND');
			this.updateInspect(obj);
		}

		if(typeof model.currentDish.id !== 'undefined'){
			console.log(model.currentDish.id);
			this.displayIngredients();
		}
		//console.log("outside "+model.currentDish.id);
		//this.updateInspect();
	}

	// this.updateInspect();
	this.update();
}