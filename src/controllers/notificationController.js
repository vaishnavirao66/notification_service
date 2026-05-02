const express = require("express");
const router = express.Router();

const notificationService = require("../services/notificationService");

router.post("/send", (req, res) => {
  const correlationId = req.correlationId;

  notificationService.sendNotification(req.body, correlationId);

  res.json({
    code: 200,
    message: "Notification sent",
    correlationId
  });
});

module.exports = router;