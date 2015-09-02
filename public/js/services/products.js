//Products service used for products REST endpoint
angular.module('mean.products').factory("Products", ['$resource', function($resource) {
    return $resource('products/:productId', {
        productId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);