const express = require("express");
const router = express.Router();
const Wallet = require("../models/wallet");
const Transaction = require("../models/transaction");
const authMiddleware = require("../middlewares/auth");
const { transferFunds, getTransactionHistory } = require('../controllers/transactionController');


router.post("/transfer", transferFunds);
router.get("/history", getTransactionHistory);

module.exports = router;
