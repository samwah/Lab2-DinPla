var InspectView = function (container, model) {


	model.addObserver(this);

	this.dishType = container.find("#dishType");
	this.ingredientsList = container.find("#insert_ing");
	this.dishSpecific = container.find("#dishSpecific");
	this.totalPrice = container.find("#totalprice");
	this.goBack = container.find("#goBack");
	this.confirmDish = container.find("#confirmDish");
	
	this.updateInspect = function(){

		this.dishSpecific.html("");
		this.totalPrice.html("");
		this.ingredientsList.html("");

		var dish = model.getDish(model.inspectedItem);

		this.dishSpecific.append("<div class='dishItem'>"+
			"<div class='row'><h2>"+ dish.name +"</h2></div>"+
			"<div class='row'><img src='images/"+ dish.image +"'/></div>"+
			"<div class='row'><h3>"+ dish.description +"</h3></div>"+
			"</div>");

		var sum = 0;

		for(i = 0; i < dish.ingredients.length; i++ ) {
			sum += dish.ingredients[i].price
			this.ingredientsList.append("<div class='col-md-4'>"+dish.ingredients[i].quantity+""+dish.ingredients[i].unit+"</div>"+
			"<div class='col-md-6'>"+dish.ingredients[i].name+"</div>"+
			"<div class='col-md-1'>SEK</div>"+
			"<div class='col-md-1'>"+dish.ingredients[i].price+"</div>");
		}

		this.totalPrice.append("SEK "+sum);
		model.pendingPrice = sum;
	}



	this.hideView = function(){
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.updateView = function(){
		if (model.activeView()==3) {
			this.showView();
		} else {
			this.hideView();
		}
		console.log(model.activeView())
	}

	this.update = function(obj){
		this.updateView();
		this.updateInspect();
	}

	this.updateInspect();
	this.update();
}