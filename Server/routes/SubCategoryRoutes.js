const express = require("express");
const router = express.Router();
const SubCategoryRoutes = require("../controllers/SubCategoryController.js");

router.get("/", SubCategoryRoutes.getAllSubCategories);
router.post("/", SubCategoryRoutes.addSubCategory);
router.get("/id", SubCategoryRoutes.getById);
router.put("/id", SubCategoryRoutes.updateSubCategory);
router.delete("/id", SubCategoryRoutes.deleteSubCategory);

module.exports = router;
