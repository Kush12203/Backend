const express = require("express");
const router = express.Router();
const {createProduct, getaProduct, getAllProduct} = require("../controller/productCtrl")

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProduct);

module.exports = router;