require("dotenv").config();
const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const morgan = require("morgan");
const { join } = require("path");

// Create a new Express app
const app = express();
const PORT = process.env.PORT || 3002;

// Set up Auth0 configuration
const authConfig = {
  domain: process.env.REACT_APP_DOMAIN,
  audience: process.env.REACT_APP_AUDIENCE
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-tx3jfmgg.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

// Define an endpoint that must be called with an access token
app.get("/api/telederm", checkJwt, (req, res) => {
  console.log(req.user);
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// Start the App & API server
app.listen(PORT, function () {
  console.log(
    `==> API Server now listening on PORT ${PORT}!`
  );
});
