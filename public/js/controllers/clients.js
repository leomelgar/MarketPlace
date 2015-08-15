angular.module('mean.clients').controller('ClientsController',['$scope', '$routeParams', '$location', '$rootScope', 'Global', 'Clients', function($scope, $routeParams, $location, $rootScope, Global, Client){
    $scope.global = Global;
    
    //activa el menu lateral c/opciones de clientes
    $scope.leftPanel = "article";
    
    $scope.create = function(){
        var client = new Client({
            name: this.name,
            lastName: this.lastName,
            doc: this.doc,
            address: this.address,
            phone: this.phone,
            email: this.email
        });
        
        client.$save(function(response){
            console.log(response);
            $location.path("clients/" + response.id);
        });
        
        //limpiar los campos
        this.name="";
        this.lastName="";
        this.doc="";
        this.address="";
        this.phone="";
        this.email="";
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