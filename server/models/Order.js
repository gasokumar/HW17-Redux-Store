const mongoose = require("mongoose");

const { Schema } = mongoose;
// Each order has a purchase date and products
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
