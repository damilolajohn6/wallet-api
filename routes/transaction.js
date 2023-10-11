const express = require("express");
const router = express.Router();
const {
  transferFunds,
  getTransactionHistory,
} = require("../controllers/transactionController");

router.post("/transfer", transferFunds);
router.get("/history", getTransactionHistory);

module.exports = router;
