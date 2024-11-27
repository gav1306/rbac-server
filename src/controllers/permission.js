const Permission = require("../models/permission");

const getPermissions = async (req, res) => {
  const permissions = await Permission.find();
  res.status(200).json({ permissions });
};

const createPermission = async (req, res) => {
  await Permission.create(req.body);
  res.status(201).json({ message: "permission created" });
};

const deletePermission = async (req, res) => {
  const { id } = req.params;

  const { deletedCount } = await Permission.deleteOne({ _id: id });
  if (!deletedCount) {
    return res.status(404).json({ message: `no permission found for ${id}` });
  }

  res.status(200).json({ message: "permission deleted" });
};

const updatePermission = async (req, res) => {
  const { id } = req.params;

  await Permission.updateOne({ _id: id }, req.body);
  res.status(200).json({ message: "permission updated" });
};

module.exports = {
  getPermissions,
  createPermission,
  deletePermission,
  updatePermission,
};
