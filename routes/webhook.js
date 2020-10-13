const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {

   try {

    const body_details = req.body;

    if (Object.entries(body_details).length === 0) {
      return res.json({"is_webhook_received": false});
    }
    return res.json({"is_webhook_received": true});
 
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
