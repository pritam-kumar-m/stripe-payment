const {createCustomer} = require("../lib/stripe");

const create = async (body) => {
  const createCustomerInStrip = await createCustomer(body);
  return createCustomerInStrip;
};

module.exports = { create };
