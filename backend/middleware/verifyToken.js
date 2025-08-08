const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).send("Token missing");

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(403).send("Token missing");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user to request
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};

module.exports = verifyToken;
