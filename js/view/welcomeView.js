var WelcomeView = function (container, model) {
	model.addObserver(this);
	this.newDinnerButton = container.find("#newDinnerButton");
	//this.masterDiv = document.getElementById('welcomeView');
	this.main = container.find("#welcomeView");
	//this.test.style.display="none";

	this.hideView = function(){
		//this.test.css( "display", "none" );
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.updateView = function(){
		if (model.activeView()==1) {
			this.showView();
		} else {
			this.hideView();
		}
		console.log(model.activeView())

	}

	this.update = function(obj){
		this.updateView();
	}
	this.update();
}