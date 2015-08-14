angular.module('mean.system').controller('LeftPanel', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    
    switch($scope.leftPanel){
            case 'article':
                $scope.menuLeft = [{
                "title": "Articulos",
                "link": "articles"
            }, {
                "title": "New Article",
                "link": "articles/create"
            },{
                "title": "Home",
                "link": "/"
            }];
            break;
        case 'client':
            $scope.menuLeft = [{
                "title": "Articulos",
                "link": "articles"
            }, {
                "title": "New Article",
                "link": "articles/create"
            },{
                "title": "Home",
                "link": "/"
            }];
    }
    
    
    $scope.isCollapsed = false;
}]);