const { DataTypes } = require("sequelize");
const sequelize = require("../db.config");

const users = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      // defaultValue: "root",
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      // unique: true,
    },
    fullname: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue("fullname", value + "singh");
      },
      get() {
        return this.getDataValue("fullname") + "XYZ" + this.name;
      },
    },
  },
  {
    // engine: "MYISAM", //default is innodb
    // timestamps: false,
    // createdAt: false,
    // updatedAt: false,
    // createdAt: "created_at",
    // updatedAt: "updated_at",
    // tableName: "userdata",
  }
);

module.exports = users;
