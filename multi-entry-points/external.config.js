const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    contacts: path.resolve(__dirname, "src/js/contacts.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  }
};
