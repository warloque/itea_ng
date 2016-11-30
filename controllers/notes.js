App.controller("NotesCtrl", function ($scope) {

  // add leading zero to a string
  var checkTime = function (i) {
    return (i < 10) ? "0" + i : i;
  };

  // define current date
  var CurrentDate = new Date();
  var CurrentTimeHHMM = checkTime(CurrentDate.getHours() + 1) + ':' + checkTime(CurrentDate.getMinutes());

  // modify date
  var dateAdd = function (date, interval, units) {
    var ret = new Date(date); //don't change original date
    switch (interval.toLowerCase()) {
      case 'year':
        ret.setFullYear(ret.getFullYear() + units);
        break;
      case 'quarter':
        ret.setMonth(ret.getMonth() + 3 * units);
        break;
      case 'month':
        ret.setMonth(ret.getMonth() + units);
        break;
      case 'week':
        ret.setDate(ret.getDate() + 7 * units);
        break;
      case 'day':
        ret.setDate(ret.getDate() + units);
        break;
      case 'hour':
        ret.setTime(ret.getTime() + units * 3600000);
        break;
      case 'minute':
        ret.setTime(ret.getTime() + units * 60000);
        break;
      case 'second':
        ret.setTime(ret.getTime() + units * 1000);
        break;
      default:
        ret = undefined;
        break;
    }
    return ret;
  };


  var testDate = dateAdd(CurrentDate, 'month', '1');

  // sorting filters
  $scope.sortType = 'oDate'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order
  $scope.searchQuery = '';     // set the default search/filter term

  // items array
  $scope.items = [
    {title: 'Note 1 for starters', text: 'Note One text not very long', oDate: CurrentDate, active: true},
    {title: 'Note 2 test note', text: 'Note Two some sample text here', oDate: testDate, active: true},
    {title: 'Note 3', text: 'Note Three text not very long', oDate: dateAdd(testDate, 'month', '1'), active: false},
    {title: 'Note fourth', text: 'Fourth sample text here', oDate: dateAdd(testDate, 'month', '2'), active: true},
    {title: 'Note 5 just in case', text: 'Note Five another sample text. Not very long', oDate: dateAdd(testDate, 'month', '3'), active: false},
    {title: 'Note 6 simply', text: 'Sixth note sample text goes here', oDate: dateAdd(testDate, 'month', '4'), active: false},
  ];

  // insert new item
  $scope.addNote = function () {
    $scope.items.push({
      title: $scope.newTitle,
      text: $scope.newText,
      oDate: $scope.newDate || CurrentDate,
      active: $scope.newIsActive || false
    });
    $scope.clearInput();
  };

  // remove item
  $scope.deleteNote = function (index) {
    $scope.items.splice(this.$items, 1);
  };

  // clear insert new inputs
  $scope.clearInput = function () {
    $scope.newTitle = null;
    $scope.newText = null;
    $scope.newDate = null;
    $scope.newIsActive = false;
    //var el = angular.element( document.querySelector( '#newNote' ) );
    //angular.forEach(el.find('input'), function(node){
    //node.value = null;
    //});
  };

});