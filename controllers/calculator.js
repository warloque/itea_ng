App.controller("CalcCtrl", function ($scope) {

  // constants
  $scope.CONST = {
    'ADD': "adding",
    'SUBTRACT': "subtracting",
    'MULT': "multiplying",
    'DIVIDE': "dividing",
    'ADD_TOKEN': "+",
    'SUBTRACT_TOKEN': "-",
    'MULT_TOKEN': "*",
    'DIVIDE_TOKEN': "/"
  };

  // calc config
  $scope.vm = {
    'output': "0", // output: calc current value
    'newNumber': true, // start a new number or to concatenate?
    'pendingOperation': null, // pending operation at the moment
    'operationToken': "", // output: current operation token
    'runningTotal': null, // the running total as operands are processed
    'pendingValue': null, // output: the number value of the string in the display output
    'lastOperation': null // tells calculate what to do when the equals buttons is clicked repeatedly
  };


  $scope.setOutput = function (outputString) {
    $scope.vm.output = outputString;
    $scope.vm.newNumber = true;
  };


  $scope.toNumber = function (numberString) {
    return (numberString) ? (numberString * 1) : 0;
  };


  $scope.setOperationToken = function (operation) {
    if (operation == 'ADD') {
      $scope.vm.operationToken = $scope.CONST.ADD_TOKEN;
    } else if (operation == 'SUBTRACT') {
      $scope.vm.operationToken = $scope.CONST.SUBTRACT_TOKEN;
    } else {
      $scope.vm.operationToken = "";
    }
  };

  // util: creates array of num length
  $scope.ArrayFromNumber = function (num) {
    return new Array(num);
  };

  // reset calc
  $scope.reset = function () {
    $scope.vm = {
      'runningTotal': null,
      'pendingValue': null,
      'pendingOperation': null
    };
    $scope.setOutput("0");
  };

  // equals function
  $scope.calculate = function() {

    if (!$scope.newNumber) {
      $scope.pendingValue = $scope.toNumber($scope.vm.output);
      $scope.lastValue = $scope.vm.pendingValue;
    }
    if ($scope.vm.pendingOperation == 'ADD') {
      $scope.vm.runningTotal += $scope.pendingValue;
      $scope.vm.lastOperation = 'ADD';
    } else if ($scope.vm.pendingOperation == 'SUBTRACT') {
      $scope.vm.runningTotal -= $scope.pendingValue;
      $scope.vm.lastOperation = 'SUBTRACT';
    } else {
      if ($scope.vm.lastOperation) {
        if ($scope.vm.lastOperation == 'ADD') {
          if ($scope.vm.runningTotal) {
            $scope.vm.runningTotal += $scope.lastValue;
          } else {
            $scope.runningTotal = 0;
          }
        } else if ($scope.vm.lastOperation == 'SUBTRACT') {
          if ($scope.vm.runningTotal) {
            $scope.vm.runningTotal -= $scope.lastValue;
          } else {
            $scope.vm.runningTotal = 0;
          }
        }
      } else {
        $scope.vm.runningTotal = 0;
      }
    }
    $scope.setOutput($scope.vm.runningTotal);
    $scope.setOperationToken();
    $scope.vm.pendingOperation = null;
    $scope.vm.pendingValue = null;

  };

  // enter digit
  $scope.digit = function (arg) {

    var i = parseFloat(arg);

    if ($scope.vm.output == "0" || $scope.vm.newNumber) {
      $scope.vm.output = i;
      $scope.vm.newNumber = false;
    } else {
      $scope.vm.output += String(i);
    }

    $scope.vm.pendingValue = $scope.toNumber($scope.vm.output);

  };

});


// square function
App.controller('SquareCtrl', function ($scope) {
  $scope.square = function (arg) {
    var i = parseFloat(arg);
    console.log(i);
    $scope.vm.total = i * i;
  };
});


// add function
App.controller('AddCtrl', function ($scope) {
  $scope.add = function () {
    console.log('+');
    if ($scope.vm.pendingValue) {
      if ($scope.vm.runningTotal && $scope.vm.pendingOperation == $scope.CONST.ADD) {
        $scope.vm.runningTotal += $scope.vm.pendingValue;
      } else if ($scope.vm.runningTotal && $scope.vm.pendingOperation == $scope.CONST.SUBTRACT) {
        $scope.vm.runningTotal -= $scope.vm.pendingValue;
      } else {
        $scope.vm.runningTotal = $scope.vm.pendingValue;
      }
    }
    $scope.setOperationToken('ADD');
    $scope.setOutput(String($scope.vm.runningTotal));
    $scope.vm.pendingOperation = 'ADD';
    $scope.vm.newNumber = true;
    $scope.vm.pendingValue = null;
  };
});


// minus function
App.controller('SubtractCtrl', function ($scope) {
  $scope.minus = function () {
    console.log('-');
    if ($scope.vm.pendingValue) {
      if ($scope.vm.runningTotal && ($scope.vm.pendingOperation == $scope.CONST.SUBTRACT)) {
        $scope.vm.runningTotal -= $scope.vm.pendingValue;
      } else if ($scope.vm.runningTotal && $scope.vm.pendingOperation == $scope.CONST.ADD) {
        $scope.vm.runningTotal += $scope.vm.pendingValue;
      } else {
        $scope.vm.runningTotal = $scope.vm.pendingValue;
      }
    }
    $scope.setOperationToken('SUBTRACT');
    $scope.setOutput(String($scope.vm.runningTotal));
    $scope.vm.pendingOperation = 'SUBTRACT';
    $scope.vm.newNumber = true;
    $scope.vm.pendingValue = null;
  };
});


// multiply function
App.controller('MultiplyCtrl', function ($scope) {
  $scope.mult = function () {
    console.log('*');
    if ($scope.vm.pendingValue) {
      if ($scope.vm.runningTotal && ($scope.vm.pendingOperation == $scope.CONST.MULT)) {
        $scope.vm.runningTotal * $scope.vm.pendingValue;
      } else {
        $scope.vm.runningTotal = $scope.vm.pendingValue;
      }
    }
    $scope.setOperationToken('MULT');
    $scope.setOutput(String($scope.vm.runningTotal));
    $scope.vm.pendingOperation = 'MULT';
    $scope.vm.newNumber = true;
    $scope.vm.pendingValue = null;
  };
});

// divide function
App.controller('DivideCtrl', function ($scope) {
  $scope.div = function (arg) {
    //var i = parseFloat(arg);
    $scope.vm.total = ($scope.vm.iFrom / $scope.vm.iTo);
  };
});