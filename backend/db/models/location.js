'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Users }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legend: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Location, { foreignKey: 'userId' });
    Location.hasMany(models.Image, { foreignKey: 'locationId', onDelete: 'cascade'  });
    Location.hasMany(models.Review, { foreignKey: 'locationId', onDelete: 'cascade'  });
    Location.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade'  });
  };
  return Location;
};
