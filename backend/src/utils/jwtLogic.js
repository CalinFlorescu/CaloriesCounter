const jwt = require("jsonwebtoken");

const createToken = (userId, secret) => {
  try {
    token = jwt.sign({ userId }, secret, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    return token;
  } catch (err) {
    console.log("JWT stage error ", err);
    throw err;
  }
};

const verifyToken = (req, res, next) => {
  if (!req.path === "/") {
    try {
      const { authorization, userId } = req.headers;
      // Returns an error if the token expired
      const decoded = jwt.verify(authorization, process.env.JWTTOKEN);
      if (decoded.userId === Number(userId)) {
        next();
      } else {
        res
          .status(401)
          .send("You don't have access to this page or your token has expired");
      }
    } catch (err) {
      res.status(500).send("There was an error at jwt stage: ", err);
    }
  } else {
    next();
  }
};

module.exports = { createToken, verifyToken };
