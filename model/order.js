const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
  orderNumber: { 
    type: String,
    unique: true, 
    required: true
 }
},
{ timeStamps: true }, {minimize:false}
);


module.exports = mongoose.model("Order", orderSchema);