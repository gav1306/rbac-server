const express = require("express");
const {
  getRoles,
  createRole,
  deleteRole,
  updateRole,
} = require("../controllers/role");

const router = express.Router();

router.route("/").get(getRoles).post(createRole);
router.route("/:id").delete(deleteRole).patch(updateRole);

module.exports = router;
