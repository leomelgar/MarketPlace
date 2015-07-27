/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Find client by id
 * Note: This is called every time that the parameter :clientId is used in a URL. 
 * Its purpose is to preload the client on the req object then call the next function. 
 */
exports.client = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Client.find({ where: {id: id}, include: [db.User]}).then(function(client){
        if(!client) {
            return next(new Error('Failed to load client ' + id));
        } else {
            req.client = client;
            return next();            
        }
    }).catch(function(err){
        return next(err);
    });
};
/**
 * Create a client
 */
exports.create = function(req, res) {
    // augment the client by adding the UserId
    req.body.UserId = req.user.id;
    // save and return and instance of client on the res object. 
    db.Client.create(req.body).then(function(client){
        if(!client){
            return res.send('users/signup', {errors: err});
        } else {
            return res.jsonp(client);
        }
    }).catch(function(err){
        return res.send('users/signup', { 
            errors: err,
            status: 500
        });
    });
};
/**
 * Update a client
 */
exports.update = function(req, res) {

    // create a new variable to hold the client that was placed on the req object.
    var client = req.client;

    client.updateAttributes({
        name: req.body.name,
        lastName: req.body.lastName,
        doc: req.body.doc,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
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
 * Delete an client
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the client that was placed on the req object.
    var client = req.client;

    client.destroy().then(function(){
        return res.jsonp(client);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
/**
 * Show an client
 */
exports.show = function(req, res) {
    // Sending down the client that was just preloaded by the clients.client function
    // and saves client on the req object.
    return res.jsonp(req.client);
};

/**
 * List of Clients
 */
exports.all = function(req, res) {
    db.Client.findAll({include: [db.User]}).then(function(clients){
        return res.jsonp(clients);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};