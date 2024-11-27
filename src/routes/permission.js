const express = require("express");
const {
  getPermissions,
  createPermission,
  deletePermission,
  updatePermission,
} = require("../controllers/permission");

const router = express.Router();

router.route("/").get(getPermissions).post(createPermission);
router.route("/:id").delete(deletePermission).patch(updatePermission);

module.exports = router;
