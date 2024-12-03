const stripeService = require("../services/stripeService");

const createPayment = async (req, res, next) => {
  try {
    const { amount, currency, description } = req.body;
    const paymentIntent = await stripeService.createPaymentIntent(amount, currency, description);
    res.status(201).json(paymentIntent);
  } catch (error) {
    next(error);
  }
};

module.exports = { createPayment };
