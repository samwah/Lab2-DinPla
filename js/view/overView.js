var OverView = function (container, model) {

	model.addObserver(this);

	this.numberOfGuests = container.find('#numberOfGuests');

	this.dishType = container.find("#dishType");
	this.totalprice = container.find("#totalPriceFinal");
	this.dishList = container.find("#dishList");
	this.goBackEdit = container.find("#goBackEdit");
	this.goPrep = container.find("#goPrep");
	this.priceDiv = container.find("#priceDiv");
	this.mode = 1;

	//this.prepCon = container.find("#prepCon");


	this.updateOverView = function(){

		this.numberOfGuests.val(model.getNumberOfGuests());
		this.numberOfGuests.html("<h2>My Dinner "+this.numberOfGuests.val()+" People</h2>");

		this.dishList.html("");
		this.totalprice.html("");

		var dishes = model.getFullMenu();
		//alert(dishes.length);

		if (this.mode == 1){

			this.goPrep.show();
			this.priceDiv.show();

			var totalsum = 0;

			for(i = 0; i < dishes.length; i++) {

				var sum = 0;
				for(j = 0; j < dishes[i].ingredients.length; j++ ) {
				sum += dishes[i].ingredients[j].MetricQuantity;
				}

				this.dishList.append("<div class='col-md-3'><div class='inspectedItem'>"+
					"<div><img src='"+ dishes[i].image +"' height='50%' width='50%'/></div>"+
					"<div><h2>"+ dishes[i].name +"</h2></div>"+
					"<div><h3>"+ (sum*model.getNumberOfGuests()).toFixed(2) +" SEK</h3></div></div></div>");
				totalsum += sum*model.getNumberOfGuests();
			}

			this.totalprice.append("SEK "+totalsum.toFixed(2));

		}
		else{

			this.goPrep.hide();
			this.priceDiv.hide();

			for(i = 0; i < dishes.length; i++) {

				if(dishes[i].desc == ''){
					dishes[i].desc = 'No description was found!'
				}

				this.dishList.append("<div class='row'>"+
				"<div class='dishItem'>"+
				"<div class='col-md-4'><img src='"+ dishes[i].image +"' height='70%' width='70%'/></div>"+
				"<div class='col-md-4'><div class='row'><h1>"+ dishes[i].name +"</h1></div>"+
				"<div class='row'><h3>"+ dishes[i].desc +"</h3></div></div>"+
				"<div class='col-md-4'><div class='row'><h2>Preperation</h2></div>"+
				"<div class='row'><h3>"+ dishes[i].inst +"</h3></div></div></div>"+
				"</div></div>");
			}
		}
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
		//console.log("overView: "+model.activeView())

	}

	this.update = function(obj){
		this.updateView();
		this.updateOverView();
	}
	this.update();
}