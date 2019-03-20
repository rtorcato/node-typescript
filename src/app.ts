// lib/app.ts
import express from "express";
import { ALLOWED_IPS } from "components/ip";
// Create a new express application instance
const app: express.Application = express();
console.log(ALLOWED_IPS);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
