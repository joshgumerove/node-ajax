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

  // authHeader gives us the respons in the fromat of "Basic base64_encoded"
  let userAndPassword = authHeader.split(" ")[1];
  let userCredentials = new Buffer.from(userAndPassword, "base64").toString(
    "utf-8"
  );

  console.log("what is userAndPassword: ", userAndPassword);
  console.log("what is userCredentials: ", userCredentials);

  let userName = userCredentials.split(":")[0];
  let password = userCredentials.split(":")[1];

  console.log("what is userName: ", userName);
  console.log("what is password: ", password);

  // would usually fetch from a database
  if (userName === "josh" && password === "gumerove") {
    console.log("josh is authorized");
    next();
  } else {
    let err = new Error("wrong username and password combination");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    res.redirect("/error");
    // next(err);
  }
}

module.exports = authenticate;
