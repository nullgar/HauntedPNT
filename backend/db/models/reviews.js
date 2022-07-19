'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Locations }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Users }
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
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
  Reviews.associate = function(models) {
    // associations can be defined here
    Reviews.belongsTo(models.Location, { foreignKey: 'locationId', onDelete: 'cascade'  });
    Reviews.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade'  });
  };
  return Reviews;
};
