const Products = require("../models/ProductSchema.js");
const { addCategory } = require("./Category.js");

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Products.find();
  } catch (error) {
    console.log(error);
  }
  if (!products) {
    return res.status(400).json({ message: "Not category" });
  } else {
    return res.status(200).json({ products });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let products;
  try {
    products = await Products.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!products) {
    return res.status(404).json({ message: "Not id" });
  } else {
    return res.status(200).json({ products });
  }
};

const addProducts = async (req, res, next) => {
  const { name, img, desc, price, category, rating } = req.body;
  let products;
  try {
    products = new Products({
      name,
      img,
      desc,
      price,
      category,
      rating,
    });
    await products.save();
  } catch (error) {
    console.log(error);
  }
  if (!products) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ products });
  }
};

const updateProducts = async (req, res, next) => {
  const { name, img, desc, price, category, rating } = req.body;
  const id = req.params.id;
  let products;
  try {
    products = await Products.findByIdAndUpdate(id, {
      name,
      img,
      desc,
      price,
      category,
      rating,
    });
    products = await products.save();
  } catch (error) {
    console.log(error);
  }
  if (!products) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ products });
  }
};

const deleteProducts = async (req, res, next) => {
  const id = req.params.id;
  let products;
  try {
    products = await Products.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!products) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ products });
  }
};

exports.getAllProducts = getAllProducts;
exports.getById = getById;
exports.addProducts = addProducts;
exports.updateProducts = updateProducts;
exports.deleteProducts = deleteProducts;
