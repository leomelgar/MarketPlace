angular.module('mean.products').controller('ProductsController',['$scope', '$routeParams', '$location', '$rootScope', 'Global', 'Products', function($scope, $routeParams, $location, $rootScope, Global, Product){
    $scope.global = Global;
    
    //activa el menu lateral c/opciones de productos
    $rootScope.leftPanel = "product";
    
    $scope.create = function(){
        var product = new Product({
            name: this.name,
            price: this.price,
            description: this.description,
            vendor: this.vendor,
            stock: this.stock
        });
        
        product.$save(function(response){
            console.log(response);
            $location.path("products/" + response.id);
        });
        
        //limpiar los campos
        this.name="";
        this.price="";
        this.description="";
        this.vendor="";
        this.stock="";
    };
    
    $scope.remove = function(product){
        if(product){
            product.$remove();
            //reacomodar luego de eliminar
            for(var i in $scope.products){
                if($scope.products[i] == product){
                    $scope.products.splice(i, 1);
                }
            }
        }
        else{
            $scope.product.$remove();
            $location.path('products');
        }
    };
    
    $scope.update = function(){
        var product = $scope.product;
        if(!product.updated){
            product.updated = [];
        }
        product.updated.push(new Date().getTime());
        
        product.$update(function(){
            $location.path('products/' + product.id);
        });
    };
    
    $scope.find = function(){
        Product.query(function(products){
            $scope.products = products;
        });
    };
    
    $scope.findOne = function(){
        Product.get({
            productId: $routeParams.productId
        }, function(product){
            $scope.product = product;
        });
    };
}]);