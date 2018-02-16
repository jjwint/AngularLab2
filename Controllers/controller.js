(function() {

	function FormController() {
		var vm = this;
		vm.toDoItem = [];

		vm.updateInfo = function(item) {
			vm.toDoItem.push(item);
			document.getElementById("inputEl").value = "";
			console.log("working");
		};
		
		vm.remove = function(item) {
			vm.toDoItem.splice(item, 1);
		};
	};

	angular
		.module("app")
		.controller("FormController", FormController);

})();