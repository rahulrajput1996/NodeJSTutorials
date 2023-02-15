const { Sequelize, QueryTypes } = require("sequelize");
const users = require("../models/user.model");
const sequelize = require("../db.config");
const createUser = async (req, res) => {
  // console.log(req.body);
  const { name, age, mobile, fullname } = req.body;

  //first method for creation

  // let data = await users.build({ name, age, mobile });
  // await data.save();
  // console.log(data.dataValues);
  // return res.json({ data });

  //second method for creation
  // let data = await users.create(
  //   { name, age, mobile },
  //   { fields: ["name", "age"] }
  // );
  // console.log(data.dataValues);
  // data.name = "soni";
  // console.log(data.name);
  // data.reload();
  // return res.json({ data });

  //updation
  // await users.update({ name: "rahul2" }, { where: { id: 2 } });

  //destroy
  // await users.destroy({ where: { id: 2 } });
  // return res.json({ success: true });

  //delete all table data
  // await users.destroy({ truncate: true });
  // return res.json({ success: true });

  //findOne
  // let data = await users.findOne();
  // return res.json({ data });

  // let data = await users.findAll({});
  // return res.json({ data });

  // await users.increment({ age: 2 }, { where: { id: 3 } });

  // let data = await users.create(
  //   { name, age, mobile },
  //   { fields: ["name", "age"] }
  // );

  // let data = await users.findAll({
  //   attributes: ["name", ["mobile", "mobileNO"], "age"],
  // });

  // let data = await users.count({ where: { name: "rahul" } });

  // let data = await users.max("age");
  // let data = await users.max("age", { where: { name: "rahul" } });

  // let data = await users.sum("age", { where: { name: "rahul" } });

  // let data = await users.findAll({ offset: 5, limit: 2 });

  // let data = await users.findAll({ group: "name" });

  // let data = await users.findAll({
  //   order: [
  //     ["age", "DESC"],
  //     ["id", "desc"],
  //   ],
  // });

  // let data = await users.findAll({
  //   attributes: {
  //     exclude: ["mobile"],
  //     include: [
  //       "name",
  //       "age",
  //       [Sequelize.fn("count", Sequelize.col("name")), "mycount"],
  //       "mobile",
  //     ],
  //   },
  // });

  // let data = await users.findAndCountAll({ where: { name: "rahul" } });

  // let [data, created] = await users.findOrCreate({
  //   where: { name: "rahulnew" },
  //   defaults: {
  //     name: "rahulnew",
  //     mobile: "1230987234",
  //   },
  // });

  // let data = await users.create({ name, age, mobile, fullname });

  // let data = await sequelize.query("select * from users", {
  //   type: QueryTypes.SELECT,
  //   // model: users,
  //   // mapToModel: true,
  //   // row: false,
  // });

  // let data = await sequelize.query(
  //   // "select * from users where name=? and age=?",
  //   // "select * from users where name=:names and age=:ages",
  //   "select * from users where name=$names and age=$ages",
  //   {
  //     type: QueryTypes.SELECT,
  //     // replacements: ["rahul11", 70],
  //     // replacements: { names: "rahul11", ages: 60 },
  //     bind: { names: "rahul11", ages: 60 },
  //   }
  // );

  // return res.json({ success: true });
  // return res.json({ data, created });
  return res.json({ data });
};

module.exports = {
  createUser,
};
