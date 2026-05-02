const express = require("express");
const router = express.Router();

const notificationService = require("../services/notificationService");

// POST /v1/notifications/send
router.post("/send", (req, res, next) => {
  try {
    notificationService.sendNotification(req.body, req.correlationId);

    res.json({
      code: 200,
      message: "Notification sent",
      correlationId: req.correlationId
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;