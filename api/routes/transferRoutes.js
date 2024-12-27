const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transfer.controller");

router.post("/transaction", transactionController.transfer);

module.exports = router;
