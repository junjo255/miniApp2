const env = process.env.NODE_ENV;

const dev = {
  web: {
    port: parseInt(process.env.DEV_APP_PORT || 3000),
  }
};

module.exports = {
  dev,
}[env];
