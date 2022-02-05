module.exports = {
  root: false,
  env: {
    node: false,
    browser: false,
  },
  extends: [
    "react-app",
    "react-app/jest",
  ],
  rule: {
    eqeqeq: 'warn',
    strict: 'off'
  }
};
