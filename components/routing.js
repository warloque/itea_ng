App.config(function ($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: "views/home.html"
  }).when('/shoplist', {
    templateUrl: "views/shoplist.html"
  }).when('/calc', {
    templateUrl: "views/calculator.html"
  }).otherwise({
    redirectTo: '/'
  });
});
