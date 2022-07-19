'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    locationId: {
      type: DataTypes.INTEGER,
      references: { model: Locations }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
    Images.belongsTo(models.Location, { foreignKey: 'locationId', onDelete: 'cascade' });
  };
  return Images;
};
