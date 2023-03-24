const Configuration = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.includes("Merge")],
};

module.exports = Configuration;
