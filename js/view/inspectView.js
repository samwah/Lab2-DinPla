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


		this.dishSpecific.append("<div class='dishItem'>"+
			"<div><h2>"+ dish.name +"</h2></div>"+
			"<div><img src='"+ dish.image +"' height='50%' width='50%'/></div>"+
			"<div><h3>"+ dish.description +"</h3></div>"+
			"</div>");

		var sum = 0;

		// for(i = 0; i < dish.ingredients.length; i++ ) {
		// 	sum += dish.ingredients[i].price
		// 	this.ingredientsList.append("<div class='col-md-4'>"+dish.ingredients[i].quantity*this.numPeople.val()+""+dish.ingredients[i].unit+"</div>"+
		// 	"<div class='col-md-6'>"+dish.ingredients[i].name+"</div>"+
		// 	"<div class='col-md-1'>SEK</div>"+
		// 	"<div class='col-md-1'>"+dish.ingredients[i].price*this.numPeople.val()+"</div>");
		// }

		this.totalPrice.append("SEK "+sum*this.numPeople.val());
		model.setPendingPrice(sum);

		//model.pendingPrice = sum*this.numPeople.val();
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

		//console.log("inspectView: "+model.activeView())
	}

	this.update = function(obj){
		this.updateView();

		if (typeof obj !== 'undefined' && model.activeView()==3) {
			console.log('SOLO OBJ FOUND');
			this.updateInspect(obj);		
		}
		//this.updateInspect();
	}

	// this.updateInspect();
	this.update();
}