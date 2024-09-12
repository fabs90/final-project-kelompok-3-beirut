var express = require("express");
var app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
