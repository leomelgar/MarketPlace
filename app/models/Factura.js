
/**
* Factura Model
*/

module.exports = function(sequelize, DataTypes) {

	var Factura = sequelize.define('Factura', 
		{
			type: DataTypes.STRING //tipo de factura A, B, C
		},
		{
            associate: function(models) {
				Factura.belongsTo(models.Client);
                Factura.belongsTo(models.Detail);
			}
		}
	);

	return Factura;
};