const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://damilolajohn622:qwertyuiop@dailys.ukhegz8.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api", require("./routes/auth"));
app.use("/api/wallet", require("./routes/wallet"));
app.use("/api/transaction", require("./routes/transaction"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


