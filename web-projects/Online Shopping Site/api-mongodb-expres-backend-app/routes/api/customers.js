const express = require("express");
let router = express.Router();
//const validateCustomer = require("../../middlewares/validateCustomer");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Customer } = require("../../models/customers");
//get customers 
router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let customers = await Customer.find().skip(skipRecords).limit(perPage);
  let total = await Customer.countDocuments();
  return res.send({ total, customers });
});
//get single customers
router.get("/:id", async (req, res) => {
  try {
    let customer = await Customer.findById(req.params.id);
    if (!customer)
      return res.status(400).send("Customer With given ID is not present"); //when id is not present id db
    return res.send(customer); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id", /*validateCustomer,  auth, admin,*/ async (req, res) => {;
  let customer = await Customer.findById(req.params.id);
  customer.name = req.body.name;
  customer.price = req.body.price;
  await customer.save();
  return res.send(customer);
});
//delete a record
router.delete("/:id", /* auth, admin,*/ async (req, res) => {
  let customer = await Customer.findByIdAndDelete(req.params.id);
  return res.send(customer);
});
//Insert a record 
router.post("/"/*, validateCustomer, auth*/, async (req, res) => {
  let customer = new Customer();
  customer.name = req.body.name;
  customer.price = req.body.price;
  await customer.save();
  return res.send(customer);
});
module.exports = router; 