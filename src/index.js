const express = require("express");
const http = require("node:http");
const mainRouter = require("./router.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", mainRouter);

const server = http.createServer(app);

server.listen(3000, "localhost", function () {
  console.log("Server listening in: http://localhost:3000");
});
