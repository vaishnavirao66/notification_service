const maskPII = require("../utils/mask");
const metrics = require("../utils/metrics");

function sendNotification(request, correlationId) {
  const maskedRecipient = maskPII(request.recipient);

  let finalMessage = request.message;

  switch (request.event) {
    case "APPOINTMENT_BOOKED":
      finalMessage = `✅ Appointment booked: ${request.message}`;
      break;

    case "APPOINTMENT_RESCHEDULED":
      finalMessage = `🔄 Appointment rescheduled: ${request.message}`;
      break;

    case "APPOINTMENT_CANCELLED":
      finalMessage = `❌ Appointment cancelled`;
      break;

    case "PAYMENT_DONE":
      finalMessage = `💰 Payment successful`;
      break;

    case "BILL_GENERATED":
      finalMessage = `🧾 Bill generated: ${request.message}`;
      break;

    default:
      finalMessage = request.message;
  }

  const log = {
    service: "notification-service",
    event: request.event,
    channel: request.channel || "SMS",
    recipient: maskedRecipient,
    message: finalMessage,
    correlationId,
    timestamp: new Date().toISOString()
  };

  console.log(JSON.stringify(log));
  metrics.incrementSent();
}

module.exports = {
  sendNotification
};