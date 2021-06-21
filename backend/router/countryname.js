const express = require('express');
const router = express.Router();
const DeliveryTime = require('../model/schema');

router.get('/countryname',async(req,res)=>{
    var output = await DeliveryTime.find({},{"countryname":1});
    // var output=[{countryname:"pakistan"},{countryname:"UAE"}]
    res.json(output);
})


module.exports = router;