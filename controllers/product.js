const Product = require("../model/product");
const getAllProducts = async(req,res) => {

   // Fetch data
   const queryObject = {};
   let apiData = Product.find(queryObject); // Mongoose query object
   // pagiantion
   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 3;
 
   let skip = (page-1)*limit;
 
   apiData = apiData.skip(skip).limit(limit);
  const {company,name,fetaure,sort,select} = req.query;
 
    if(company){
        queryObject.company = company;
        console.log(queryObject.company);
    }
    if(name){
        queryObject.name = {$regex: name,$options: "i"};
        console.log(queryObject.name);
    }
    if(fetaure){
        queryObject.feature = feature;
        console.log(queryObject.feature);
    }
 
 

  // Sorting
  if (select) {
    const selectFix = select.split(",").join(" ")
    apiData = apiData.select(selectFix); // Use Mongoose's sort method
  }
   // Select
   if (sort) {
    const sortFix = sort.replace(",", " "); // Replace commas with spaces
    apiData = apiData.sort(sortFix); // Use Mongoose's sort method
  }

 

  console.log(queryObject);
  // Execute the query
  const myData = await apiData;
  res.status(200).json({ myData, nbHabits: myData.length});

};

const getAllProductsTesting = async(req,res) => {

    const myData  = await Product.find(req.query).sort("-price");
    res.status(200).json({myData});

};

module.exports = {getAllProducts,getAllProductsTesting};