var mongose= require('mongoose');

// Database Connections
mongose.connect('mongodb://localhost:27017/Deliverytime', {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Sucessfull");
}).catch((e)=>{
    console.log("No Connection")
})