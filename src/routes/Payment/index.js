const express = require('express');
const paymentIntant = require('../../api/apiControlar/postPaymentIntent');
const userPaymentDetails = require('../../api/apiControlar/postUserPaymentDetails');
const postSslPayments = require('../../api/apiControlar/postSslPayments');
const updateIsPayment = require('../../api/apiControlar/updateIsPayment');
const failedSslPayment = require('../../api/apiControlar/failedSslPayment');
const router = express.Router()

router.post("/create-payment-intent" , paymentIntant)
router.post("/userPaymentDetails" , userPaymentDetails)
router.post("/sslPayment" , postSslPayments)
router.post("/payment/success/:transactionId" , updateIsPayment)
router.post("/payment/failed/:transactionId" , failedSslPayment)


module.exports=router


