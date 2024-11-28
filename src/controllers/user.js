const User = require("../models/user");

const login = async (req, res) => {
  const user = await User.findOne(req.body).populate({
    path: "role",
    populate: "permissions",
  });
  if (!user) {
    return res
      .status(404)
      .json({ message: `no user found with ${req.body.username}` });
  }
  res.status(200).json({ user });
};
const getUsers = async (req, res) => {
  const users = await User.find().populate("role");
  res.status(200).json({ users });
};
const createUser = async (req, res) => {
  await User.create(req.body);

  res.status(201).json({ message: "user created" });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  await User.updateOne({ _id: id }, req.body);

  res.status(200).json({ message: "user updated" });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { deletedCount } = await User.deleteOne({ _id: id });
  if (!deletedCount) {
    return res.status(404).json({ message: `no user found for ${id}` });
  }

  res.status(200).json({ message: "user deleted" });
};

module.exports = { login, getUsers, createUser, updateUser, deleteUser };
