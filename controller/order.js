const Order = require('../model/order');

const postOrder = async (req,res)=>{

    const {orderNumber} = req.body;

    try {

        const existingOrder = await Order.findOne({orderNumber});

        if (existingOrder) {
            return res.status(400).json({ error: 'Order number already exists.' });
          }
        else{
            const newOrder = await Order.create(req.body);
            res.status(200).json(newOrder)
        }
    } catch (error) {
        return {error}
    }
}


module.exports={
    postOrder
}