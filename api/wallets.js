const express = require("express");
const router = express.Router();
const WalletController = require("../controllers/walletController");

// Define routes for wallet operations (e.g., create, get balance)
router.post("/", WalletController.createWallet);
router.get("/:userId/balance", WalletController.getBalance);

module.exports = router;
