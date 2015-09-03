angular.module('mean.system').controller('LeftPanel', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    
    switch($scope.leftPanel){
            case 'article':
                $scope.titleMenu = "Menu Articulos"
                $scope.menuLeft = [{
                "title": "Home",
                "link": "/",
                "icon":"glyphicon glyphicon-home"
            },{
                "title": "Listar",
                "link": "articles",
                "icon":"glyphicon glyphicon-list"
            }, {
                "title": "Nuevo",
                "link": "articles/create",
                "icon":"glyphicon glyphicon-plus"
            }];
            break;
            case 'client':
                $scope.titleMenu = "Menu Clientes"
                $scope.menuLeft = [{
                    "title": "Home",
                    "link": "/",
                    "icon":"glyphicon glyphicon-home"
                },{
                    "title": "Listar",
                    "link": "clients",
                    "icon":"glyphicon glyphicon-user"
                }, {
                    "title": "Agregar",
                    "link": "clients/create",
                    "icon":"glyphicon glyphicon-plus"
                }];
            break;
            case 'product':
                $scope.titleMenu = "Menu Productos"
                $scope.menuLeft = [{
                    "title": "Home",
                    "link": "/",
                    "icon":"glyphicon glyphicon-home"
                },{
                    "title": "Stock",
                    "link": "products",
                    "icon":"glyphicon glyphicon-star"
                }, {
                    "title": "Agregar",
                    "link": "products/create",
                    "icon":"glyphicon glyphicon-plus"
                }];
    }
}]);