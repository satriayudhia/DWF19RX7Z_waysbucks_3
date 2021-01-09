"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductToping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductToping.init(
    {
      transactionId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      topingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductToping",
    }
  );
  return ProductToping;
};
