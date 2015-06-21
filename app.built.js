var FormFeatureModule = angular.module("FormFeatureModule", [ "ngRoute" ]);

FormFeatureModule.controller("FormFeatureCtrl", [ "$scope", function($scope) {
    $scope.username = "James", $scope.status = "Please fill out the form.";
} ]), FormFeatureModule.directive("formfeature", function() {
    return {
        restrict: "E",
        controller: "FormFeatureCtrl",
        templateUrl: "app/FormFeatureModule/templates/formfeature.html"
    };
});

var HeaderModule = angular.module("HeaderModule", []);

HeaderModule.controller("HeaderCtrl", [ "$scope", function($scope) {
    $scope.title = "Header";
} ]), HeaderModule.directive("headerMain", function() {
    return {
        restrict: "E",
        controller: "HeaderCtrl",
        templateUrl: "app/HeaderModule/templates/header.html"
    };
});

var HomePageModule = angular.module("HomePageModule", [ "ngRoute" ]);

HomePageModule.controller("HomeCtrl", [ "$scope", "HomePageModel", function($scope, HomePageModel) {
    $scope.h1 = HomePageModel();
    var title = document.getElementsByTagName("title")[0];
    title.innerText = "Angular Scalable";
} ]), HomePageModule.factory("HomePageModel", [ "h1", "HomePageService", function(h1, HomePageService) {
    return function() {
        var h1 = HomePageService();
        return h1;
    };
} ]), HomePageModule.config([ "$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/HomePageModule/templates/home.html",
        controller: "HomeCtrl"
    });
} ]), HomePageModule.value("h1", "Angular Scalable"), HomePageModule.service("HomePageService", [ "h1", function(h1) {
    return function() {
        return h1;
    };
} ]), angular.bootstrap(document, [ "HeaderModule", "HomePageModule", "FormFeatureModule" ]);