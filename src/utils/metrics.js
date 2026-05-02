let metrics = {
  notifications_sent_total: 0,
  notifications_failed_total: 0
};

function incrementSent() {
  metrics.notifications_sent_total++;
}

function incrementFailed() {
  metrics.notifications_failed_total++;
}

function getMetrics() {
  return metrics;
}

module.exports = {
  incrementSent,
  incrementFailed,
  getMetrics
};