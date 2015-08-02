angular.module('mean.clients').controller('ClientsController',['$scope', '$routeParams', '$location', 'Global', 'Client', function($scope, $routeParams, $location, Global, Client){
    $scope.global = Global;
    
    $scope.creat = function(){
        var client = new Client({
            
        });
        
        client.$save(function(response){
            console.log(response);
            $location.path("clients/" + response.id);
        });
        
        //limpiar los campos
        this.name="";
    };
    
    $scope.remove = function(client){
        if(client){
            client.$remove();
            //reacomodar luego de eliminar
            for(var i in $scope.clients){
                if($scope.clients[i] == client){
                    $scope.clients.splice(i, 1);
                }
            }
        }
        else{
            $scope.client.$remove();
            $location.path('clients');
        }
    };
    
    $scope.update = function(){
        var client = $scope.client;
        if(!client.updated){
            client.updated = [];
        }
        client.updated.push(new Date().getTime());
        
        client.$update(function(){
            $location.path('clients/' + client.id);
        });
    };
    
    $scope.find = function(){
        Client.query(function(clients){
            $scope.clients = clients;
        });
    };
    
    $scope.findOne = function(){
        Client.get({
            clientId: $routeParams.clientId
        }, function(client){
            $scope.client = client;
        });
    };
}]);