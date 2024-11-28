const Role = require("../models/role");

const getRoles = async (req, res) => {
  const roles = await Role.find().populate("permissions");
  res.status(200).json({ roles });
};

const createRole = async (req, res) => {
  await Role.create(req.body);
  res.status(201).json({ message: "role created" });
};

const deleteRole = async (req, res) => {
  const { id } = req.params;

  const { deletedCount } = await Role.deleteOne({ _id: id });
  if (!deletedCount) {
    return res.status(404).json({ message: `no role found for ${id}` });
  }

  res.status(200).json({ message: "role deleted" });
};

const updateRole = async (req, res) => {
  const { id } = req.params;

  await Role.updateOne({ _id: id }, req.body);
  res.status(200).json({ message: "role updated" });
};

module.exports = {
  getRoles,
  createRole,
  deleteRole,
  updateRole,
};
