const Logo = require("../models/LogoSchema.js");

const getAllLogo = async (req, res, next) => {
  let logo;
  try {
    logo = await Logo.find();
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(400).json({ message: "Not logo" });
  } else {
    return res.status(200).json({ logo });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let logo;
  try {
    logo = await Logo.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(404).json({ message: "Not id logo" });
  } else {
    return res.status(200).json({ logo });
  }
};

const addLogo = async (req, res, next) => {
  const { img } = req.body;
  let logo;
  try {
    logo = new Logo({
      img,
    });
    await logo.save();
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(500).json({ message: "invalid add logo" });
  } else {
    return res.status(201).json({ logo });
  }
};

const updateLogo = async (req, res, next) => {
  const { img } = req.body;
  const id = req.params.id;
  let logo;
  try {
    logo = await Logo.findByIdAndUpdate(id, {
      img,
    });
    logo = await logo.save();
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(404).json({ message: "invalid update logo" });
  } else {
    return res.status(200).json({ logo });
  }
};

const deleteLogo = async (req, res, next) => {
  const id = req.params.id;
  let logo;
  try {
    logo = await Logo.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(404).json({ message: "invalid delete logo" });
  } else {
    return res.status(200).json({ logo });
  }
};

exports.getAllLogo = getAllLogo;
exports.getById = getById;
exports.addLogo = addLogo;
exports.updateLogo = updateLogo;
exports.deleteLogo = deleteLogo;
