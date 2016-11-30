App.directive('isActiveNav', ['$location', function ($location) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            scope.location = $location;
            scope.$watch('location.path()', function (currentPath) {
                if (currentPath === element[0].attributes['href'].value) {
                    element.addClass('is-active');
                } else {
                    element.removeClass('is-active');
                }
            });
        }
    };
}]);