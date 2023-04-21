function authenticate(req, res, next) {
  // grab Authorization header from the browser's request
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    let err = new Error("you are not authenticated");
    // triggers popup in the browser
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    next(err);
  }
}

module.exports = authenticate;
