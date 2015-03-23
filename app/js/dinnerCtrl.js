// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	$scope.setNumberOfGuest = function(number){
		Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}


	var numberOfGuests = 2;
	this.inspectedItem = 1;
	this.menu = [];
	var currentView = 1;
	this.pendingPrice = 0;
	//var apiKey = "dvxTU5WwHw2BY5uT8iYX278xv4DXbUBP";
	var apiKey= "dvxVMoURtQ38bKtLPt7dMRI95Tm07Lad";
	this.menuSearch = [];
	this.currentDish = {};        

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
	}

	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	this.getSelectedDish = function(type) {
		for(key in this.menu){
			if(this.menu[key].type == type){
				return this.menu[key];
			}
		}
	}

	this.getFullMenu = function() {
		return this.menu;
	}

	this.getAllIngredients = function() {
		var list_ingredients = [];

		for(key in this.menu){
			list_ingredients = list_ingredients.concat(this.menu[key].ingredients);
		}

		return list_ingredients;
	}

	this.getDishPrice = function(id){
		var sum = 0;
		for(key in this.menu){
			if(this.menu[key].id == id) {
				for(i = 0; i<this.menu[key].ingredients.length; i++){
					console.log("FOKC"+this.menu[key].ingredients[i].price);
					sum += this.menu[key].ingredients[i].price;
				}
			}
		}
		return sum;
	}

	this.getTotalMenuPrice = function() {
		var list_ingredients = this.getAllIngredients();
		var sum = 0;

		for(ing in list_ingredients){
			//alert("ingredient.price");
			sum = sum + list_ingredients[ing].MetricQuantity;
		}

		return parseFloat(sum*numberOfGuests.toFixed(2));
	}

	this.addDishToMenu = function(id) {
		this.menu.push(this.currentDish);
	}

	//Removes dish from this.menu
	this.removeDishFromMenu = function(id) {
	  for(key in this.menu){
			if(this.menu[key].id == id) {
				//console.log(key);
				this.menu.splice(key,1);
			}
		}
	}

}

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price