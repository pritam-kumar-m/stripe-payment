const Stripe = require("stripe");
const config = require("../config/default");

const stripe = new Stripe(config.stripe.apiKey);

const createPaymentIntent = async (amount, currency, description) => {
  return stripe.paymentIntents.create({
    amount,
    currency,
    description,
  });
};

module.exports = { createPaymentIntent };
