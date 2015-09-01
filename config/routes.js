
var users       = require('../app/controllers/users');
var articles    = require('../app/controllers/articles');
var clients     = require('../app/controllers/clients');
var products     = require('../app/controllers/products');
var index       = require('../app/controllers/index');

exports.init = function(app, passport, auth) {

    console.log('Initializing Routes');

    // User Routes
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);

    // Setting up the users api
    app.post('/users', users.create);

    // Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), users.session);

    // Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Finish with setting up the userId paramUser
    app.param('userId', users.user);

    // Article Routes
    app.route('/articles')
        .get(articles.all)
        .post(auth.requiresLogin, articles.create);
    app.route('/articles/:articleId')
        .get(articles.show)
        .put(auth.requiresLogin, auth.article.hasAuthorization, articles.update)
        .delete(auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

    // Finish with setting up the articleId param
    // Note: the articles.article function will be called everytime then it will call the next function. 
    app.param('articleId', articles.article);
    
    // Client Routes
    app.route('/clients')
        .get(clients.all)
        .post(auth.requiresLogin, clients.create);
    app.route('/clients/:clientId')
        .get(clients.show)
        .put(auth.requiresLogin, auth.client.hasAuthorization, clients.update)
        .delete(auth.requiresLogin, auth.client.hasAuthorization, clients.destroy);

    // Finish with setting up the clientId param
    // Note: the clients.client function will be called everytime then it will call the next function. 
    app.param('clientId', clients.client);
    
    // Product Routes
    app.route('/products')
        .get(products.all)
        .post(auth.requiresLogin, products.create);
    app.route('/products/:productId')
        .get(products.show)
        .put(auth.requiresLogin, auth.product.hasAuthorization, products.update)
        .delete(auth.requiresLogin, auth.product.hasAuthorization, products.destroy);

    // Finish with setting up the productId param
    // Note: the products.product function will be called everytime then it will call the next function. 
    app.param('productId', products.product);

    
    // Home route
    app.get('/', index.render);

};
