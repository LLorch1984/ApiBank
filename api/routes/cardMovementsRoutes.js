const express = require("express");
const router = express.Router();
const cardMovementController = require("../controllers/cardMovements.controller");

router.post("/withdraw", cardMovementController.withdraw);
router.post("/deposit", cardMovementController.deposit);

module.exports = router;
