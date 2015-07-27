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
