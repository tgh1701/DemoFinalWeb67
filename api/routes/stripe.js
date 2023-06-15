const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51NHTQoC38sz6HJhubGrbMAUCajhIp3fPD7F5JqDcoFYWRNOt4JCBOfP9lOXdvJ1SXr2ng90577HdFdh47Xtq8Ikc00O4Ifodg7"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (error, charge) => {
      if (error) {
        res.status(500).json({error: error.message});
      } else {
        res.status(200).json({charge});
      }
    }
  );
});

module.exports = router;
