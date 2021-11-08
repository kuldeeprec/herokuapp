const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    retrun(err);
  }
  console.log("server listening on port", port);
});
