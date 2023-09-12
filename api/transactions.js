const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/transactionController");

// Define routes for transaction operations (e.g., make a transaction)
router.post("/", TransactionController.makeTransaction);

module.exports = router;
