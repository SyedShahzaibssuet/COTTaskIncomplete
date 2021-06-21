const express = require('express');
const router = express.Router();
const DeliveryTime = require('../model/schema');

router.post('/deliverytime',async(req,res)=>{
    // var output = await DeliveryTime.find({countryname:req.body.countryname});selecteddate,deliverytype,countryname
    var reciveddate = req.body.selecteddate;
    var d = new Date(recievedate.slice(4),recievedate.slice(2,4),recievedate.slice(0,2));
    var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(req.body.countryname=="pakistan")
    {
        if(days[d.getDay()]=="Sunday" && days[d.getDay()]=="Saturday")
        {
            
        }
    }
    else
    {
        if(days[d.getDay()]=="Friday")
        {

        }
    }
    // var deliverytime;
    console.log(req.body);
    res.json();
})

module.exports = router;