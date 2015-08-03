
/**
	* CLient Model
	*/

module.exports = function(sequelize, DataTypes) {

	var Client = sequelize.define('Client', 
		{
			name: DataTypes.STRING,
            lastName: DataTypes.STRING,
			doc: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING
		},
		{
            associate: function(models) {
				Client.belongsTo(models.User);
                Client.hasMany(models.Factura);
			}
		}
	);

	return Client;
};