var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/',{
    templateUrl : 'pages/home.html',
    controller  : 'mainController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'aboutController'
  })

  .when('/projects', {
    templateUrl : 'pages/projects.html',
    controller  : 'projectsController'
  })

  .when('/contact', {
    templateUrl : 'pages/contact.html',
    controller  : 'contactController'
  });

  $locationProvider.html5Mode(false);
});


app.controller('mainController', function($scope) {
     $scope.message = 'Look at this Home Page';
 });

app.controller('aboutController', function($scope) {
     $scope.message = 'Look! I am an about page.';
 });

app.controller('projectsController', function($scope) {
      $scope.message = 'Look at these Awesome Projects!';
  });

app.controller('contactController', function($scope) {
     $scope.message = 'Contact us!';
 });
