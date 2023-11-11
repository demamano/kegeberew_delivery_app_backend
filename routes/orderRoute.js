const express = require("express");
const router = express.Router();
const {createOrder, deleteOrder,getOrders, deleteOrders, getOrdersByStatus, getOrdersByName,updateOrder} = require("../controller/orderController");
// get all orders

router.post("/create",createOrder);
router.delete("/delete/:orderId",deleteOrder);
router.delete("/delete",deleteOrders);
router.get("/status/:status",getOrdersByStatus);
router.get("/name/:name",getOrdersByName);
router.get("/orders",getOrders),
router.put("/update/:orderId",updateOrder);

module.exports = router;
