HomePageModule.factory('HomePageModel', ['h1', 'HomePageService', function(h1, HomePageService) {
   return function() {
   	  var h1 = HomePageService();
	  return h1;
   };
}]);
