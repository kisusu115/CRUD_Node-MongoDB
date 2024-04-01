const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// 전체 product 조회
router.get("/", getProducts);

// ID 대응하는 product 조회
router.get("/:id", getProduct);

// product 추가 및 추가 product 재조회
router.post("/", createProduct);

//product 수정 -> put메서드 사용
router.put("/:id", updateProduct);

//ID 대응되는 Product 삭제
router.delete("/:id", deleteProduct);

module.exports = router;
