const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connetDB = require("./db/connect");
require("dotenv").config();

const products_routes = require("./routes/product");
app.get('/',(req,res)=>{
     res.send("Hi, I am Live");
})


// middleware
app.use('/api/products',products_routes);

const start = async()=>{
try {
    await connetDB(process.env.MONGODB_URL);
    app.listen(PORT,()=>{
        console.log(`${PORT} Yes I am connected`);

    })
} catch (error) {
    
}
}
start();