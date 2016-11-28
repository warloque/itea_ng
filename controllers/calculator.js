App.controller("CalcCtrl", function ($scope) {

    // calc config
    $scope.vm = {
        'total': null,

        'digit': null,
        'digit_prev': null,

        'operation': null,
        'operation_prev': null
    };

    // util: creates array of num length
    $scope.ArrayFromNumber = function(num) {
        return new Array(num);
    };

    //reset calc
    $scope.reset = function() {
        $scope.vm = {
            'total': null,

            'digit': null,
            'digit_prev': null,

            'operation': null,
            'operation_prev': null
        }
    }

});


// calculator digits
App.controller('DigitCtrl', function ($scope) {
    $scope.digit = function (arg) {
        var i = parseFloat(arg);
        console.clear();

        // set current digit
        $scope.vm.digit = ($scope.vm.digit_prev) ? "" + $scope.vm.digit_prev + i : i;
        $scope.vm.digit_prev = (!$scope.vm.digit_prev) ? i : $scope.vm.digit;

        console.log($scope.vm.digit);
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
    $scope.add = function (arg) {
        //var i = parseFloat(arg);
        //$scope.vm.digit_prev = $scope.vm.digit;
        $scope.vm.total = ($scope.vm.iFrom + $scope.vm.iTo);
    };
});


// minus function
App.controller('SubtractCtrl', function ($scope) {
    $scope.minus = function (arg) {
        //var i = parseFloat(arg);
        $scope.vm.total = ($scope.vm.iFrom - $scope.vm.iTo);
    };
});


// multiply function
App.controller('MultiplyCtrl', function ($scope) {
    $scope.mult = function (arg) {
        //var i = parseFloat(arg);
        $scope.vm.total = ($scope.vm.iFrom * $scope.vm.iTo);
    };
});

// divide function
App.controller('DivideCtrl', function ($scope) {
    $scope.div = function (arg) {
        //var i = parseFloat(arg);
        $scope.vm.total = ($scope.vm.iFrom / $scope.vm.iTo);
    };
});