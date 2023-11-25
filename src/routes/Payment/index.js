const express = require('express');
const paymentIntant = require('../../api/apiControlar/postPaymentIntent');
const router = express.Router()

router.post("/create-payment-intent" , paymentIntant)
router.post("/userPaymentDetails" , )

module.exports=router


