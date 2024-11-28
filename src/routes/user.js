const express = require("express");
const {
  login,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

const router = express.Router();
router.route("/login").post(login);

router.route("/").get(getUsers).post(createUser);
router.route("/:id").delete(deleteUser).patch(updateUser);
module.exports = router;
