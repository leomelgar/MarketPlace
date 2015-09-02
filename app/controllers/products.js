/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find product by id
 * Note: This is called every time that the parameter :productId is used in a URL. 
 * Its purpose is to preload the product on the req object then call the next function. 
 */
exports.product = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Product.find({ where: {id: id}, include: [db.User]}).then(function(product){
        if(!product) {
            return next(new Error('Failed to load product ' + id));
        } else {
            req.product = product;
            return next();            
        }
    }).catch(function(err){
        return next(err);
    });
};
/**
 * Create a product
 */
exports.create = function(req, res) {
    // augment the product by adding the UserId
    req.body.UserId = req.user.id;
    // save and return and instance of product on the res object. 
    db.Product.create(req.body).then(function(product){
        if(!product){
            return res.send('users/signup', {errors: err});
        } else {
            return res.jsonp(product);
        }
    }).catch(function(err){
        return res.send('users/signup', { 
            errors: err,
            status: 500
        });
    });
};
/**
 * Update a product
 */
exports.update = function(req, res) {

    // create a new variable to hold the product that was placed on the req object.
    var product = req.product;

    product.updateAttributes({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        vendor: req.body.vendor,
        stock: req.body.stock
    }).then(function(a){
        return res.jsonp(a);
    }).catch(function(err){
        return res.render('error', {
            error: err, 
            status: 500
        });
    });
};
/**
 * Delete an product
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the product that was placed on the req object.
    var product = req.product;

    product.destroy().then(function(){
        return res.jsonp(product);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
/**
 * Show an product
 */
exports.show = function(req, res) {
    return res.jsonp(req.product);
};
/**
 * List of products
 */
exports.all = function(req, res) {
    db.Product.findAll({include: [db.User]}).then(function(products){
        return res.jsonp(products);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};