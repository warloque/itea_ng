/*
 using basic controller encapsulating setAddress function and zip storage
 used from within child controllers
 */

App.controller("ZipBasicCtrl", function ($scope) {

    $scope.zip = {
        'billing': null,
        'shipping': null
    };

    // set address (common func for both controlles)
    $scope.setAddress = function (type, zip) {
        console.log("Type: " + type + ", zip: " + zip);
    };

});


App.controller("ZipSecondCtrl", function ($scope) {

    $scope.$on('zip_updated', function (event, arg) {
        $scope.zip.billing = arg;
    });

    $scope.copyAddress = function () {
        $scope.zip.shipping = $scope.zip.billing;
    };

});

