const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authMiddleware = require("./middlewares/auth");

dotenv.config();

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Apply the authentication middleware globally
app.use(authMiddleware);

// Routes
const authRoutes = require("./routes/auth");
const walletRoutes = require("./routes/wallet");
const transactionRoutes = require("./routes/transaction");

app.use("/api", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transaction", transactionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
