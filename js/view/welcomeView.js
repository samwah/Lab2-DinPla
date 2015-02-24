var WelcomeView = function (container, model) {
	this.newDinnerButton = container.find("#newDinnerButton");
	//this.masterDiv = document.getElementById('welcomeView');
	this.test = container.find("#test");
	this.test.style.display="none";

	this.hideView = function() {
		$('#texttest').hide();
		document.getElementById('test').style.display="hidden";
	};
}