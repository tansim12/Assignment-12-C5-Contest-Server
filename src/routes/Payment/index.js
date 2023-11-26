const express = require('express');
const paymentIntant = require('../../api/apiControlar/postPaymentIntent');
const userPaymentDetails = require('../../api/apiControlar/postUserPaymentDetails');
const router = express.Router()

router.post("/create-payment-intent" , paymentIntant)
router.post("/userPaymentDetails" , userPaymentDetails)


module.exports=router


