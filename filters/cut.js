/*
 @wordwise (boolean) - if true, cut only by words bounds,
 @max (integer) - max length of the text, cut to this number of chars,
 @tail (string, default: ' …') - add this string to the input string if the string was cut.
 */

App.filter('cut', function () {
    return function (items, field, val) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item[field] === val) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});