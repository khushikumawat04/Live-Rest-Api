const connectDB = require("./db/connect");
const Product = require("./model/product");
require("dotenv").config();
const Productjson = require("./products.json");

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(Productjson );

        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
start();