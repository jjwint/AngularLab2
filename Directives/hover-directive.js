(function() {

	function HoverItem() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "Templates/taskList.html",
			link: function($scope, $element, $attrs) {
				$element.on("mouseenter", function() {
					$element.css("background-color", "#ccc");
				});
				$element.on("mouseleave", function() {
					$element.css("background-color", "#fff");
				});
			}
		}
	}

	angular
		.module("app")
		.directive("hoverItem", HoverItem);

})();