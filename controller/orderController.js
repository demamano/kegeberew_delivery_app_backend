const { Order } = require("../model/order");

// create order

const createOrder = async (req, res) => {

    try {
        // Check if an order with the same orderId already exists
        const existingOrder = await Order.findOne({ orderId: req.body.orderId });

        // If an order with the same orderId exists, return an error
        if (existingOrder) {
            return res.status(400).json({ message: "Order already exists" });
        }


        const order = await Order.create({
            orderId: req.body.orderId,
            phoneNumber: req.body.phoneNumber,
            name: req.body.name,
            status: {
                fulfilled: req.body.fulfilled,
                delivered: req.body.delivered
            }
        });
        if (order) {
            res.status(200).json({ data: order, message: "Order created successfully" });
        }
    } catch (err) {
        // catch all errors
        res.status(500).json({ error: err });
        // error for 400
        res.status(400).json({ error: err });
        console.log(err);


    }
}
// delete order by attribute orderId
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndRemove({ orderId: req.params.orderId });
        if (order) {
            res.status(200).json({ order });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// delete all orders
const deleteOrders = async (req, res) => {
    try {
        const orders = await Order.remove({});
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute status
const getOrdersByStatus = async (req, res) => {
    try {
        const orders = await Order.find({ status: req.params.status });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute name
const getOrdersByName = async (req, res) => {
    try {
        const orders = await Order.find({ name: req.params.name });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute phoneNumber
const getOrdersByPhoneNumber = async (req, res) => {

    try {
        const orders = await Order.find({ phoneNumber: req.params.phoneNumber });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute orderId
const getOrdersByOrderId = async (req, res) => {
    try {
        const orders = await Order.find({ orderId: req.params.orderId });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute orderId and status
const getOrdersByOrderIdAndStatus = async (req, res) => {
    try {
        const orders = await Order.find({ orderId: req.params.orderId, status: req.params.status });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute orderId and name
const getOrdersByOrderIdAndName = async (req, res) => {
    try {
        const orders = await Order.find({ orderId: req.params.orderId, name: req.params.name });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute orderId and phoneNumber
const getOrdersByOrderIdAndPhoneNumber = async (req, res) => {
    try {
        const orders = await Order.find({ orderId: req.params.orderId, phoneNumber: req.params.phoneNumber });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }

}
// get all orders by attribute name and status
const getOrdersByNameAndStatus = async (req, res) => {
    try {
        const orders = await Order.find({ name: req.params.name, status: req.params.status });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute name and phoneNumber
const getOrdersByNameAndPhoneNumber = async (req, res) => {
    try {
        const orders = await Order.find({ name: req.params.name, phoneNumber: req.params.phoneNumber });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get all orders by attribute phoneNumber and status
const getOrdersByPhoneNumberAndStatus = async (req, res) => {

    try {
        const orders = await Order.find({ phoneNumber: req.params.phoneNumber, status: req.params.status });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }

}
// get all orders by attribute orderId, name and phoneNumber
const getOrdersByOrderIdAndNameAndPhoneNumber = async (req, res) => {

    try {
        const orders = await Order.find({ orderId: req.params.orderId, name: req.params.name, phoneNumber: req.params.phoneNumber });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }

}
// get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// get order by id
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.status(200).json({ order });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// update order by attribute orderId
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate({ orderId: req.params.orderId }, req.body, { new: true });
        if (order) {
            res.status(200).json({ order });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
//  get all orders by date they created

const getOrdersByDate = async (req, res) => {
    try {
        const orders = await Order.find({ createdAt: req.params.createdAt });
        if (orders) {
            res.status(200).json({ orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// 




// export all functions

module.exports = {
    createOrder,
    deleteOrder,
    deleteOrders,
    getOrdersByStatus,
    getOrdersByName,
    getOrdersByPhoneNumber,
    getOrdersByOrderId,
    getOrdersByOrderIdAndStatus,
    getOrdersByOrderIdAndName,
    getOrdersByOrderIdAndPhoneNumber,
    getOrdersByNameAndStatus,
    getOrdersByNameAndPhoneNumber,
    getOrdersByPhoneNumberAndStatus,
    getOrdersByOrderIdAndNameAndPhoneNumber,
    getOrders,
    getOrderById,
    updateOrder,
    getOrdersByDate
}





