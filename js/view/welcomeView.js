var WelcomeView = function (container, model) {

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

	}

	this.update = function(obj){
		this.updateView();
	}
}