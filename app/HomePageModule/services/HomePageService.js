HomePageModule.value('h1','Angular Scalable');
HomePageModule.service('HomePageService', ['h1', function(h1) {
   return function() {
	  return h1;
   };
}]);