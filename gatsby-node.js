/* eslint-disable no-console, import/no-extraneous-dependencies, prefer-const, no-shadow */

require("dotenv").config();

const log = (message, section) =>
  console.log(`\n\u001B[36m${message} \u001B[4m${section}\u001B[0m\u001B[0m\n`);

const path = require("path");

module.exports = async ({ actions: { createPage }, graphql }) => {
  console.log("TESTING", "SHIT");
};
