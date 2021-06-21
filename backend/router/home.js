const express = require('express');
const router = express.Router();
const DeliveryTime = require('../model/schema');

router.get('/',async(req,res)=>{
    var output = await DeliveryTime.find();
    res.json(output);
})
router.post('/',(req,res)=>{
    var datasave =new DeliveryTime({
        "countryname":req.body.name,
        "Holidays":req.body.holidays,
        "Workinghours":req.body.hours,
        "Publicholidays":req.body.publicholidays,
    })
    datasave.save((err,resp)=>{
        if(err)
        {
            console.log(`Data not saved ${err}`);
        }
        else
        {
            console.log("Data Successfully Stored on dat based");
        }
    })
    res.redirect('/');
});
router.delete('/',(req,res)=>{
    DeliveryTime.deleteOne({"countryname":req.body.countryname},(err,resp)=>{
        if(err)
        {
            console.log(`Data not saved ${err}`);
        }
        else
        {
            console.log("Data Successfully Deleted");
        }
    });
    res.redirect('/');
});
router.patch('/',(req,res)=>{
    DeliveryTime.updateOne({"countryname":req.body.countryname},{"countryname":req.body.name,
    "Holidays":req.body.holidays,
    "Workinghours":req.body.hours,
    "Publicholidays":req.body.publicholidays,},
    (err,resp)=>{
        if(err)
        {
            console.log(`Data not saved ${err}`);
        }
        else
        {
            console.log("Data Successfully Stored on updated");
        }
    })
    res.redirect('/');
});
module.exports = router;