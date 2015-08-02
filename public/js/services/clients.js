//Clients service used for clients REST endpoint
angular.module('mean.clients').factory("Clients", ['$resource', function($resource) {
    return $resource('clients/:clientId', {
        clientId: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);