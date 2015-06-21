HeaderModule.directive('headerMain', function(){
    return {
        restrict: 'E',
        controller: 'HeaderCtrl',
        templateUrl: 'app/HeaderModule/templates/header.html'
    }
});