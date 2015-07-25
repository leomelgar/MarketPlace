
/**
	* Detail Model
	*/

module.exports = function(sequelize, DataTypes) {

	var Detail = sequelize.define('Detail', 
		{
			amount: DataTypes.INTEGER,
            balance: DataTypes.FLOAT
		},
		{
            associate: function(models) {
				Detail.hasMany(models.Factura);
                Detail.belongsTo(models.Product);
			}
		}
	);

	return Detail;
};