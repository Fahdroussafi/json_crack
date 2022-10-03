module.exports = function (sequelize, DataTypes) {
  const Data = sequelize.define("Data", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Data.associate = function (models) {
    Data.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
        onDelete: "CASCADE",
      },
    });
  };
  return Data;
};
