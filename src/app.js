const express = require("express");
const paymentRoutes = require("./routes/paymentRoutes");
const errorHandler = require("./middlewares/errorHandler");
const customerRoute=require("./routes/customerRouters");

const app = express();

// Middleware
app.use(express.json());

//
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

// Routes
app.use("/api/payments", paymentRoutes);
app.use("/api/customer", customerRoute);

// Error handling
app.use(errorHandler);

module.exports = app;
