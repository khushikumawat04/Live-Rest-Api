const Product = require("../model/product");
const getAllProducts = async(req,res) => {

   // Fetch data
   const queryObject = {};
   const {company,name,feature,sort,select} = req.query;
 
    if(company){
        queryObject.company = company.trim();
        console.log(queryObject.company);
    }
    if(name){
        queryObject.name = {$regex: name.trim(),$options: "i"};
        console.log(queryObject.name);
    }
    if(feature){
        queryObject.feature = feature.trim();
        console.log(queryObject.feature);
    }
  
    console.log("Final Query Object:", queryObject);

    // Initialize query with filters
    let apiData = Product.find(queryObject);
 

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
 

     // pagination
     let page = Number(req.query.page) || 1;
     let limit = Number(req.query.limit) || 8;
     let skip = (page-1)*limit;

    
     apiData = apiData.skip(skip).limit(limit);

 
  // Execute the query
  const myData = await apiData;
  res.status(200).json({ myData, nbHabits: myData.length});

};

const getAllProductsTesting = async(req,res) => {

    const myData  = await Product.find(req.query).sort("-price");
    res.status(200).json({myData});

};

module.exports = {getAllProducts,getAllProductsTesting};