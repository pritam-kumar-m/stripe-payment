const stripeService = require("../services/CustomerServices");

const createCustomer = async (req, res, next) => {
  try {
    const customer = req.body;
    const payload = {};
    const create = await stripeService.create(payload);
    res.status(201).json(create);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCustomer };
