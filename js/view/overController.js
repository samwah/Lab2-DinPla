var OverController = function(view, model) {
 
 	 view.goBackEdit.click(function(){
	 	model.activeView(2);
	 	view.mode = 1;
	 });

	 view.goPrep.click(function(){
	 	view.mode = 2;
	 	model.notifyObservers();
	 });
	 
}