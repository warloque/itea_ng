// get current path
$scope.isCurrentPath = function (path) {
  return $location.path() === path;
};