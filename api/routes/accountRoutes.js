const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accounts.controller");

router.get("/:id/movements", accountController.getTransactions);

module.exports = router;
