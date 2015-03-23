// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	$scope.setNumberOfGuest = function(number) {
	    Dinner.setNumberOfGuests(number);
	  }

	$scope.getNumberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}

	$scope.getFullMenu = function() {
		return Dinner.getFullMenu();
	}

	$scope.addDishToMenu = function(dish){
		Dinner.addDishToMenu(dish);
		console.log($scope.menu);
	}

	$scope.getDishPrice = function(dish){
		Dinner.getDishPrice(dish);
	}

	$scope.removeDishFromMenu = function(dish){
		Dinner.removeDishFromMenu(dish);
	}

	$scope.getTotalMenuPrice = function(){
		Dinner.getTotalMenuPrice();
	}

});

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price