HomePageModule.controller('HomeCtrl', ['$scope', 'HomePageModel', function($scope, HomePageModel ) {
	$scope.h1 = HomePageModel();
	var title = document.getElementsByTagName('title')[0];
	title.innerText = "Angular Scalable";
}]);