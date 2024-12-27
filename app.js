const express = require("express");
const bodyParser = require("body-parser");
const accountRoutes = require("./api/routes/accountRoutes");

const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use("/accounts", accountRoutes);

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
