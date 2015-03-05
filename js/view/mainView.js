var MainView = function (container, model) {
	model.addObserver(this);

	this.hideView = function(){
		container.hide();
	}

	this.showView = function(){
		container.show();
	}

	this.updateView = function(){
		if (model.activeView()>=2) {
			this.showView();
		} else {
			this.hideView();
		}
		//console.log("mainView: "+model.activeView());
	}

	this.update = function(obj){
		this.updateView();
	}
	this.update();
}