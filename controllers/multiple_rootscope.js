/*
 we use $rootScope as scope broadcaster for
 billing and shipment zip codes.
 $on method is used for event listeners getting incoming zip codes.
*/

App.controller("ZipFirstRSCtrl", function ($rootScope, $scope) {

    $rootScope.setAddress = function (type, zip) {
        console.log("Type: " + type + ", zip: " + zip);
        // put updated billing/shipment (depends on @type) zip into global scope
        $rootScope.$broadcast('updated_zip_'+type, zip);
    }

});

App.controller("ZipSecondRSCtrl", function ($rootScope, $scope) {

    // get updated zip code from global scope
    $scope.$on('updated_zip_billing', function (event, arg) {
        $scope.shippingZip = arg;
    });

    $scope.copyAddress = function () {
        $scope.shippingZip = $scope.billingZip;
        // put updated shipping zip into global scope
        $rootScope.$broadcast('updated_zip_shipping', $scope.shippingZip);
    };

});

App.controller("ZipThirdRSCtrl", function ($rootScope, $scope) {

    // get updated billing zip
    $scope.$on('updated_zip_billing', function (event, arg) {
        $scope.billZip = arg;
    });

    // get updated shipping zip
    $scope.$on('updated_zip_shipping', function (event, arg) {
        $scope.shipZip = arg;
    });

});

