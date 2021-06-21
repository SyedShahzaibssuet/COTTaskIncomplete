const mongoose = require('mongoose');

var Countryschema = mongoose.Schema({
    "countryname":{type:String,required:true,unique:[true,"Country Name is also added"]},
    "Holidays":[],
    "Workinghours":{type:String,required:true},
    "Publicholidays":[]
});

module.exports=mongoose.model("DeliveryTime",Countryschema);