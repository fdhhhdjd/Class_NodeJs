const NODE_ENV = {
  DEV: "dev",
  PRO: "pro",
};

const LIMIT_BODY = {
  _5_MB: "5mb",
};

const TIME_TOKEN = {
  ACCESS: "15m",
  REFETCH: "7d",
};

const TIME_COOKIE = {
  _7_DAY: 7 * 24 * 60 * 60 * 1000,
};

const TOKEN_EXPIRE = "jwt expired";
const INVALID_TOKEN = "invalid token";

const SALT_ROUNDS = 10;

module.exports = {
  NODE_ENV,
  LIMIT_BODY,
  TIME_TOKEN,
  TIME_COOKIE,
  TOKEN_EXPIRE,
  INVALID_TOKEN,
  SALT_ROUNDS,
};
