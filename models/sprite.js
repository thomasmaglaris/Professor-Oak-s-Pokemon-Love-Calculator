module.exports = (sequelize, DataTypes) => {
  const Sprite = sequelize.define("Sprite", {
    spriteName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Sprite.associate = function(models) {
    Sprite.hasMany(models.Couple, {
      onDelete: "cascade"
    });
  };
  return Sprite;
};
