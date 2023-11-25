const userPaymentDetails = async (req, res) => {
    const info = req.body;
    
    const paymentResult = await userPaymentCollection.save(info);
    
    res.send({ paymentResult, deleteResult });
  }