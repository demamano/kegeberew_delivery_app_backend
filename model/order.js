const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    orderId: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    status: {
      fulfilled: {
        type: Boolean,
        default: false
      },
      delivered: {
        type: Boolean,
        default: false
      }
    }
  },
  {
    timestamps: true
  }
 );
  // module.exports = mongoose.model("Order", orderSchema);
  module.exports =  {
    Order: mongoose.model("Order", orderSchema),
    orderSchema
  };
  