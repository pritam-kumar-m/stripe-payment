module.exports = {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || "development",
    stripe: {
      apiKey: process.env.STRIPE_API_KEY || "your-stripe-api-key",
    },
  };
  