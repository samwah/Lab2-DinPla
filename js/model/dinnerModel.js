//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numberOfGuests = 2;
	this.inspectedItem = 1;
	this.menu = [];
	this.observers = [];
	var currentView = 1;
	this.pendingPrice = 0;
	//var apiKey = "dvxTU5WwHw2BY5uT8iYX278xv4DXbUBP";
	var apiKey= "dvxVMoURtQ38bKtLPt7dMRI95Tm07Lad";
	this.menuSearch = [];
	this.currentDish = {};
	$("#loading").hide();


	this.getRecipeJsonSearch = function(titleKeyword) {
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                  + titleKeyword 
                  + "&api_key="+apiKey;

        $("#loading").show();
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            context: this,
            url: url,
            success: function (data) {
                this.menuSearch = [];
                $("#loading").hide();
                $("#errorMsg").html("");
                console.log(data.Results);

                if (typeof data.Results !== 'undefined' && data.Results.length > 0){
                	
					for (n in data.Results){
						currentData = data.Results[n];
						this.menuSearch.push({id: currentData.RecipeID, name: currentData.Title, type: currentData.Category, image: currentData.ImageURL});
					}		
					this.notifyObservers(this.menuSearch);
				}
				else{
                	$("#errorMsg").html('<h2>"'+titleKeyword+'" did not return any results!<h2>');
				}
            },
            error: function (jqXHR,textStatus,errorThrown){
            	$("#loading").hide();
            	$("#errorMsg").html("<h1>An error has occured, please check your internet connnection and refresh the page</h1>");
            }
        });
	}


	this.getDish = function(recipeID) {
		var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
		$("#loading").show();
		$.ajax({
	        type: "GET",
	        dataType: 'json',
	        cache: false,
	        context: this,
	        url: url,
	        success: function (data) {
	        	$("#loading").hide();
	            var dish = data;
	            console.log(dish);
	            this.currentDish = {id: dish.RecipeID, name: dish.Title, type: dish.Category, image: dish.ImageURL, ingredients: dish.Ingredients, inst: dish.Instructions, desc: dish.Description};
	            this.notifyObservers(this.currentDish);
	        },
	        error: function (jqXHR,textStatus,errorThrown){
	        	$("#dishSpecific").html("");
				$("#totalPrice").html("");
				$("#insert_ing").html("");
            	$("#loading").hide();
            	$("#errorMsg2").html("<h1>An error has occured, please check your internet connnection and refresh the page</h1>");
            }
		});

		
		
    }
        

	this.setPendingPrice = function(price) {
		this.pendingPrice = price*numberOfGuests;
	}

	this.getView = function() {
		return currentView;
	}
	
	this.activeView = function(view) {
		//1 = firstpage
		//2 = mainpage
	
		if(view!=undefined){
			currentView = view;
			this.notifyObservers();
		}
		return currentView; //+
	}

	this.addObserver = function(observer) {
		this.observers.push(observer);
	}

	this.notifyObservers = function(obj) {
		for (var i=0; i<this.observers.length; i++){
				this.observers[i].update(obj);
		}
	}

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		//this.notifyObservers(); //binish 'im
	}

	// should return 
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the this.menu for selected type 
	this.getSelectedDish = function(type) {
		for(key in this.menu){
			if(this.menu[key].type == type){
				return this.menu[key];
			}
		}
	}

	//Returns all the dishes on the this.menu.
	this.getFullMenu = function() {
		return this.menu;
	}

	//Returns all ingredients for all the dishes on the this.menu.
	this.getAllIngredients = function() {
		var list_ingredients = [];
		//var list_ingredients2 = [123,12123];
		//list_ingredients = list_ingredients.concat(list_ingredients2);

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

	//Returns the total price of the this.menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var list_ingredients = this.getAllIngredients();
		var sum = 0;

		for(ing in list_ingredients){
			//alert("ingredient.price");
			sum = sum + list_ingredients[ing].MetricQuantity;
		}

		return parseFloat(sum*numberOfGuests.toFixed(2));
	}

	//Adds the passed dish to the this.menu. If the dish of that type already exists on the this.menu
	//it is removed from the this.menu and the new one added.
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

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	// this.getDish = function (id) {
	//   for(key in dishes){
	// 		if(dishes[key].id == id) {
	// 			return dishes[key];
	// 		}
	// 	}
	// }


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}