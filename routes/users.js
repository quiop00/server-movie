const router = require("express").Router();
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister
} = require("../utils/Auth");

// Users Registeration Route
router.post("/register", async (req, res) => {
  await userRegister(req.body, "user", res);
});

// Users Login Route
router.post("/login", async (req, res) => {
  await userLogin(req.body, res);
});


// Users Protected Route
router.get(
  "/user-dashboard",
  userAuth,
  checkRole(["user","admin"]),
  async (req, res) => {
    return res.json("User");
  }
);

// Admin Protected Route
router.get(
  "/admin-dashboard",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("Admin");
  }
);
router.get(
  "/movie",
  async (req, res) => {
    //return res.json(movieDetail(req.params.id));
    return res.json("Hello");;
  }
);

module.exports = router;
