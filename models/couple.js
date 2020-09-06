// Exporting Couple obj, has attributes name1, name2 and compatibility rating.

module.exports = function (sequelize, DataTypes) {
  const Couple = sequelize.define("Couple", {
    name1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    compatability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return Couple;
};
