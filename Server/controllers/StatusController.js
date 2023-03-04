const Status = require("../models/StatusSchema.js");

const getAllStatus = async (req, res, next) => {
  let status;
  try {
    status = await Status.find();
  } catch (error) {
    console.log(error);
  }
  if (!status) {
    return res.status(400).json({ message: "Not status" });
  } else {
    return res.status(200).json({ status });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let status;
  try {
    status = await Status.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!status) {
    return res.status(404).json({ message: "Not id" });
  } else {
    return res.status(200).json({ status });
  }
};

const addStatus = async (req, res, next) => {
  const { name } = req.body;
  let status;
  try {
    status = new Status({
      name,
    });
    await status.save();
  } catch (error) {
    console.log(error);
  }
  if (!status) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ status });
  }
};

const updateStatus = async (req, res, next) => {
  const { name } = req.body;
  const id = req.params.id;
  let status;
  try {
    status = await Status.findByIdAndUpdate(id, {
      name,
    });
    status = await status.save();
  } catch (error) {
    console.log(error);
  }
  if (!status) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ status });
  }
};

const deleteStatus = async (req, res, next) => {
  const id = req.params.id;
  let status;
  try {
    status = await Status.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!status) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ status });
  }
};

exports.getAllStatus = getAllStatus;
exports.getById = getById;
exports.addStatus = addStatus;
exports.updateStatus = updateStatus;
exports.deleteStatus = deleteStatus;
