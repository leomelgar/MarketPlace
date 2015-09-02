/**
	* Product Model
	*/
module.exports = function(sequelize, DataTypes) {

	var Product = sequelize.define('Product', 
		{
			name: DataTypes.STRING,
            price: DataTypes.FLOAT,
			description: DataTypes.STRING,
            vendor: DataTypes.STRING,
            stock : DataTypes.INTEGER
		},
		{
            associate: function(models) {
				Product.hasMany(models.Detail);
			}
		}
	);

	return Product;
};