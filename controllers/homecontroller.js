const path = require("path");
module.exports.home = function (req, res) {
  return res.sendFile(path.join(__dirname, "../views/home.html"));
};
