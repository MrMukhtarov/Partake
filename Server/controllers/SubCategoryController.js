const SubCategory = require("../models/SubCategory.js");

const getAllSubCategories = async (req, res, next) => {
  let subCategory;
  try {
    subCategory = await SubCategory.find();
  } catch (error) {
    console.log(error);
  }
  if (!subCategory) {
    return res.status(400).json({ message: "Not SubCategory" });
  } else {
    return res.status(200).json({ subCategory });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let subCategory;
  try {
    subCategory = await SubCategory.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!subCategory) {
    return res.status(404).json({ message: "Not id" });
  } else {
    return res.status(200).json({ subCategory });
  }
};

const addSubCategory = async (req, res, next) => {
  const { name } = req.body;
  let subCategory;
  try {
    subCategory = new SubCategory({
      name,
    });
    await subCategory.save();
  } catch (error) {
    console.log(error);
  }
  if (!subCategory) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ subCategory });
  }
};

const updateSubCategory = async (req, res, next) => {
  const { name } = req.body;
  const id = req.params.id;
  let subCategory;
  try {
    subCategory = await SubCategory.findByIdAndUpdate(id, {
      name,
    });
    subCategory = await subCategory.save();
  } catch (error) {
    console.log(error);
  }
  if (!subCategory) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ subCategory });
  }
};

const deleteSubCategory = async (req, res, next) => {
  const id = req.params.id;
  let subCategory;
  try {
    subCategory = await SubCategory.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!subCategory) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ subCategory });
  }
};

exports.getAllSubCategories = getAllSubCategories;
exports.getById = getById;
exports.addSubCategory = addSubCategory;
exports.updateSubCategory = updateSubCategory;
exports.deleteSubCategory = deleteSubCategory;
