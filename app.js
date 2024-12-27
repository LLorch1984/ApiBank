const express = require("express");
const bodyParser = require("body-parser");
const accountRoutes = require("./api/routes/accountRoutes");
const cardMovementsRoutes = require("./api/routes/cardMovementsRoutes");
const transferRoutes = require("./api/routes/transferRoutes");

const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use("/accounts", accountRoutes);
app.use("/cards", cardMovementsRoutes);
app.use("/transfers", transferRoutes);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
