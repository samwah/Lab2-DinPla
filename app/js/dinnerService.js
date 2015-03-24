// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
  
//var apiKey = "dvxTU5WwHw2BY5uT8iYX278xv4DXbUBP";
  var apiKey= "dvxVMoURtQ38bKtLPt7dMRI95Tm07Lad";

  var numberOfGuests = 2;
  var menu = [];
  this.inspectedItem = 1;
  this.pendingPrice = 0;
  this.currentDish = {};

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:apiKey});
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:apiKey}); 

  this.setNumberOfGuests = function(number) {
    if(number >= 0){
      numberOfGuests = number;
    }
  }

  this.getNumberOfGuests = function() {
    return parseInt(numberOfGuests);
  }

  this.getSelectedDish = function(type) {
    for(key in menu){
      if(menu[key].type == type){
        return menu[key];
      }
    }
  }

  this.getFullMenu = function() {
    return menu;
  }

  this.getAllIngredients = function() {
    var list_ingredients = [];

    for(key in menu){
      list_ingredients = list_ingredients.concat(menu[key].Ingredients);
    }

    return list_ingredients;
  }

  this.getDishPrice = function(dish){
    var sum = 0;
    for(key in dish.Ingredients){
      sum += dish.Ingredients[key].MetricQuantity;
    }

    console.log("sum:"+sum)
    return sum.toFixed(2);
  }

  this.getTotalMenuPrice = function() {
    var list_ingredients = this.getAllIngredients();
    var sum = 0;

    for(ing in list_ingredients){
      //alert("ingredient.price");
      sum = sum + list_ingredients[ing].MetricQuantity;
    }
    console.log("TotalMenuPrice: "+sum);
    return parseFloat(sum*numberOfGuests).toFixed(2);
  }

  this.addDishToMenu = function(dish) {
    menu.push(dish);
    console.log("New menu: "+menu);
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    for(key in menu){
      if(menu[key].RecipeID == id) {
        menu.splice(key,1);
        console.log("Menu after remove: "+menu);
      }
    }
    console.log("Dish item removed");
  }

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});