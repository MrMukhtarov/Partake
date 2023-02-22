const Category = require("../models/CategorySchema");

const getAllCategories = async (req, res, next) => {
  let category;
  try {
    category = await Category.find();
  } catch (error) {
    console.log(error);
  }
  if (!category) {
    return res.status(400).json({ message: "Not category" });
  } else {
    return res.status(200).json({ category });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let category;
  try {
    category = await Category.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!category) {
    return res.status(404).json({ message: "Not id" });
  } else {
    return res.status(200).json({ category });
  }
};

const addCategory = async (req, res, next) => {
  const { name } = req.body;
  let category;
  try {
    category = new Category({
      name,
    });
    await category.save();
  } catch (error) {
    console.log(error);
  }
  if (!category) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ category });
  }
};

const updateCategory = async (req, res, next) => {
  const { name } = req.body;
  const id = req.params.id;
  let category;
  try {
    category = await Category.findByIdAndUpdate(id, {
      name,
    });
    category = await category.save();
  } catch (error) {
    console.log(error);
  }
  if (!category) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ category });
  }
};

const deleteCategory = async (req, res, next) => {
  const id = req.params.id;
  let category;
  try {
    category = await Category.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!category) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ category });
  }
};

exports.getAllCategories = getAllCategories;
exports.getById = getById;
exports.addCategory = addCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
