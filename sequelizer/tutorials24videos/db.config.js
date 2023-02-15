const Sequelize = require("sequelize");

const sequelize = new Sequelize("all-india", "root", "", {
  host: "localhost",
  // logging: false,
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
  .sync({
    // force: true, match: /-india$/
  })
  .then(() => {
    console.log("table created");
  })
  .catch(() => {
    console.log("table not created");
  });

module.exports = sequelize;
