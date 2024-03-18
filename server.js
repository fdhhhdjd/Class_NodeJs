//* IMPORT
const app = require("./src/app");
const {
  app: { port: PORT },
} = require("./src/commons/configs/app.config");
const logger = require("./src/loggers/winston.log");

const initRedis = require("./src/databases/init.redis");

const server = app.listen(PORT, () => {
  console.info(`💸 Api backend start with http://localhost:${PORT} 🔥`);
});

const cleanup = () => {
  initRedis.closeRedis();
};

process.on("exit", cleanup);

process.on("unhandledRejection", (reason, promise) => {
  logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
});

process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception thrown: ${error.message}`);
  cleanup();
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
  cleanup();
});
