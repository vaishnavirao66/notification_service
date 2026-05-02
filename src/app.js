const express = require("express");
const app = express();

const notificationRoutes = require("./controllers/notificationController");
const correlationId = require("./middleware/correlationId");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");

app.use(express.json());
app.use(correlationId);


// routes
app.use("/v1/notifications", notificationRoutes);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// health check
app.get("/health", (req, res) => {
  res.json({ status: "Healthy" });
});

// global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    code: 500,
    message: err.message || "Internal Server Error",
    correlationId: req.correlationId
  });
});

const metricsUtil = require("./utils/metrics");

app.get("/metrics", (req, res) => {
  res.json(metricsUtil.getMetrics());
});

module.exports = app;