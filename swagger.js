const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Notification Service",
    version: "1.0.0",
    description: "Microservice for sending notifications"
  },
  paths: {
    "/v1/notifications/send": {
      post: {
        summary: "Send notification",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  type: { type: "string" },
                  message: { type: "string" },
                  recipient: { type: "string" },
                  channel: { type: "string" }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: "Notification sent"
          }
        }
      }
    }
  }
};

module.exports = swaggerSpec;