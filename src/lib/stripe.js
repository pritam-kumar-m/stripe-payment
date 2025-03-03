const Stripe = require("stripe");

/**
 * Initialize Stripe client with API key
 * @param {string} apiKey - Your Stripe API Key
 * @returns {object} - Stripe instance
 */
const initializeStripe = (apiKey) => {
  if (!apiKey) {
    throw new Error("Stripe API Key is required");
  }
  return new Stripe(apiKey);
};

const stripe = initializeStripe(process.env.STRIPE_API_KEY);

/**
 * Create a new customer in Stripe
 * @param {object} body - Customer data (name, email, metadata, etc.)
 * @returns {Promise<object>} - Stripe Customer object
 */
const createCustomer = async (body) => {
  try {
    const customer = await stripe.customers.create(body);
    console.log("Customer created successfully:", customer.id);
    return customer;
  } catch (error) {
    console.error("Error creating customer:", error.message);
    throw error;
  }
};

/**
 * Retrieve a customer by ID
 * @param {string} customerId - Stripe Customer ID
 * @returns {Promise<object>} - Stripe Customer object
 */
const getCustomer = async (customerId) => {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    console.log("Customer retrieved:", customer.id);
    return customer;
  } catch (error) {
    console.error("Error retrieving customer:", error.message);
    throw error;
  }
};

/**
 * Update a customer's information
 * @param {string} customerId - Stripe Customer ID
 * @param {object} body - Updated data (name, email, metadata, etc.)
 * @returns {Promise<object>} - Updated Stripe Customer object
 */
const updateCustomer = async (customerId, body) => {
  try {
    const customer = await stripe.customers.update(customerId, body);
    console.log("Customer updated successfully:", customer.id);
    return customer;
  } catch (error) {
    console.error("Error updating customer:", error.message);
    throw error;
  }
};

/**
 * Delete a customer
 * @param {string} customerId - Stripe Customer ID
 * @returns {Promise<object>} - Deleted Stripe Customer confirmation
 */
const deleteCustomer = async (customerId) => {
  try {
    const confirmation = await stripe.customers.del(customerId);
    console.log("Customer deleted successfully:", confirmation.id);
    return confirmation;
  } catch (error) {
    console.error("Error deleting customer:", error.message);
    throw error;
  }
};

module.exports = {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
