App.controller("ListCtrl", function ($scope) {

  $scope.items = [
    {text: 'Chocolate', done: true, value: 50},
    {text: 'Potato', done: false, value: 20},
    {text: 'Banana', done: false, value: 10},
    {text: 'Water', done: true, value: 1203}
  ];

  $scope.addItem = function () {
    //console.log($scope.itemText);
    $scope.items.push({text: $scope.itemText, done: false, value: $scope.itemValue});
    $scope.itemText = '';
    $scope.itemValue = '';
  };

  $scope.remain = function () {
    var count = 0;
    angular.forEach($scope.items, function (item) {
      count += item.done ? 0 : 1;
    });
    return count;
  };

  $scope.delete = function () {
    $scope.items.splice(this.$items, 1);
  }

});
