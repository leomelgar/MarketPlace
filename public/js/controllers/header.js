angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menuArticle = [{
        "title": "Lista Articlos",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    }];
    $scope.menuClient = [
        {
        "title": "Lista Clientes",
        "link": "clients"
    }, {
        "title": "Nuevo Cliente",
        "link": "clients/create"
    }];
    
    $scope.isCollapsed = false;
}]);