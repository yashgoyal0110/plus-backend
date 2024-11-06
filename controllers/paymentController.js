import Razorpay from "razorpay";
export const payment = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if(!order){
        res.status(400).json({message: "An error occured"})
    }
    res.status(200).json({message: "Successful", order})
  } catch (err) {
    console.log(err);
    res.status(500).json({err})
  }
};
