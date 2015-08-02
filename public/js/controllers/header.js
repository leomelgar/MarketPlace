angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Articles",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    }, {
        "title": "Clientes",
        "link": "clients"
    }, {
        "title": "Nuevo Cliente",
        "link": "clients/create"
    }];
    
    $scope.isCollapsed = false;
}]);