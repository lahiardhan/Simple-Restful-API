import express from "express";
import {
	getProducts,
	saveProducts,
	updateProducts,
	getProductById,
	deleteProducts,
} from "../controller/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById); // get data nya by ID
router.post("/", saveProducts);
router.patch("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
