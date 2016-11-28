App.config(function ($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: "views/home.html"
  }).when('/shoplist', {
    templateUrl: "views/shoplist.html"
  }).when('/calc', {
    templateUrl: "views/calculator.html"
  }).when('/multiple', {
    templateUrl: "views/multiplectrl.html"
  }).when('/multiple_rootscope', {
    templateUrl: "views/multiplectrl_rootscope.html"
  }).otherwise({
    redirectTo: '/'
  });
});
