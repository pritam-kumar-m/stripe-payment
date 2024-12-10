require('dotenv').config();
const app = require("./app");
const config = require("./config/default");
const logger = require("./utils/logger");

const PORT = config.port;
console.log(process.env.STRIPE_API_KEY)
app.listen(PORT, () => {
  console.log(`Server running in ${config.environment} mode on port ${PORT}`);
});
