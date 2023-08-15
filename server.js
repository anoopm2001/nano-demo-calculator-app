const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = "/calculator";

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get("/greeting", (req, res) => {
  console.log("Hello World!");
  return res.status(200);
});

baseRouter.post("/add", (req, res) => {
  var f = req.body.first;
  var s = req.body.second;

  var ans = f + s;

  res.json({ result: ans });
});

baseRouter.post("/subtract", (req, res) => {
  var f1 = req.body.first;
  var s1 = req.body.second;

  var ans1 = f - s;
  res.json({ result: ans1 });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
