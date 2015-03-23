// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {

	//$scope.showRoute = $routingParams.dishId;

	$scope.fetchDish = function() {
		$scope.status = "Searching...";
  		Dinner.Dish.get({id:$routingParams.dishId},function(data){
			$scope.oneDish=data.Results;
			$scope.status = "Showing " + data.Results.length + " results";
		},function(data){
			$scope.status = "There was an error";
		});
  	}

  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  
});