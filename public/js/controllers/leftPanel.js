angular.module('mean.system').controller('LeftPanel', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    
    switch($scope.leftPanel){
            case 'article':
                $scope.menuLeft = [{
                "title": "Home",
                "link": "/",
                "icon":"glyphicon icon-home"
            },{
                "title": "Articulos",
                "link": "articles",
                "icon":"icon-th-list"
            }, {
                "title": "Nuevo",
                "link": "articles/create",
                "icon":"icon-plus"
            }];
            break;
            case 'client':
                $scope.menuLeft = [{
                    "title": "Home",
                    "link": "/",
                    "icon":"glyphicon icon-home"
                },{
                    "title": "Clientes",
                    "link": "clients",
                    "icon":"icon-user"
                }, {
                    "title": "Agregar",
                    "link": "clients/create",
                    "icon":"icon-plus"
                }];
    }
}]);