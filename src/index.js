const app = require("./app");
const config = require("./config/default");
const logger = require("./utils/logger");

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running in ${config.environment} mode on port ${PORT}`);
});
