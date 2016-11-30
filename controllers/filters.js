App.controller("FiltersCtrl", function ($scope) {


  /* utils */
  $scope.arrayToString = function (string) {
    return string.join(", ");
  };

  Array.prototype.extend = function (other_array) {
    /* should include a test to check whether other_array really is an array */
    other_array.forEach(function (v) {
      this.push(v)
    }, this);
  };
  /* end utils */


  // sources
  $scope.vm = {
    aNumbers: [1, 3, 5, 2, 6, 7, 4, 10, 11, 9, 8],
    aResult: []
  };

  // sort numbers
    // sort 1
  /*var sortNumber = function (data) {
    return data.sort();
  };*/
    // sort 2
  var sortNumber = function(a, b) {
    return a - b;
  };

  // even check
  var isEven = function (n) {
    return n % 2 === 0;
  };

  // odd check
  var isOdd = function (n) {
    return n % 2 !== 0;
  };

  $scope.evens = $scope.vm.aNumbers.filter(isEven).sort(sortNumber);
  $scope.odds = $scope.vm.aNumbers.filter(isOdd).sort(sortNumber);

  $scope.evens.extend($scope.odds);
  $scope.vm.aResult = $scope.evens;
  //console.log($scope.vm.aResult);

});