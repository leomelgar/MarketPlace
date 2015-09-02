//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        //to articles
        when('/articles', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).
        //to clients
        when('/clients', {
            templateUrl: 'views/clients/list.html'
        }).
        when('/clients/create', {
            templateUrl: 'views/clients/create.html'
        }).
        when('/clients/:clientId/edit', {
            templateUrl: 'views/clients/edit.html'
        }).
        when('/clients/:clientId', {
            templateUrl: 'views/clients/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
         //to products
        when('/products', {
            templateUrl: 'views/products/list.html'
        }).
        when('/products/create', {
            templateUrl: 'views/products/create.html'
        }).
        when('/products/:productId/edit', {
            templateUrl: 'views/products/edit.html'
        }).
        when('/products/:productId', {
            templateUrl: 'views/products/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);