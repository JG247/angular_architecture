HomePageModule.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl: 'app/HomePageModule/templates/home.html',
            controller: 'HomeCtrl'
        }
    );
}]);