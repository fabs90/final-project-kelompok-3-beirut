/*eslint no-undef: "off"*/
import express from "express";
import http from "node:http";

const app = express();
import mainRouter from "./router.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", mainRouter);

const server = http.createServer(app);

server.listen(3000, "localhost", function () {
  console.log("Server listening in: http://localhost:3000");
});
