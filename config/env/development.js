module.exports = {
    // This is your MYSQL Database configuration
    db: {
        name: "db_marketPlace",
        password: "nerv2309",
        username: "root"
    },
    app: {
        name: "Market Place"
    },
    // You will need to get your own client id's before this will work properly
    facebook: {
        clientID: "<CLIENT ID>",
        clientSecret: "<CLIENT SECRET>",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "<CLIENT ID>",
        clientSecret: "<CLIENT SECRET>",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    google: {
        realm: "http://localhost:3000/",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}
