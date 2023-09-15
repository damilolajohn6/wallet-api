const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Verify token expiry
    if (Date.now() >= decoded.exp * 1000) {
      return res.status(401).json({ error: "Token has expired" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
