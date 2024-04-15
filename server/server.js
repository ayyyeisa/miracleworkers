const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/.enviro" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

require("./routes/auth.js")(app);
require('./routes/google-oauth.js')const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Test", {//connect and create Test db
    dbName: 'CatData',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('Connected Successfully'))

.catch((err)=>{console.error(err);}); 

//Create seller schema 
const sellerSchema = new mongoose.Schema({
    seller_picture: { type: Object, required: false },
    seller_name: { type: String, required: true },
    seller_website: { type: String, required: false },
    seller_email: { type: String, required: true, unique: true },
    seller_phoneNumber: { type: String, required: true },
    seller_address: { type: String, required: false },
    seller_summary: { type: String, required: true },
    seller_partners: { type: Array, required: true},
    userType: { type: String, default: "Seller" }
}); 

//Create a seller model 
const Seller = mongoose.model("sellers", sellerSchema);
Seller.createIndexes();

const app = express(); //Create route to create a seller 
const cors = require("cors");
console.log("App listen at port 8080");

// for backend and express
app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({ extended: false })); //parses URL-encoded data

//create route to create a seller 
// this is where we are using the variables
// assumption is that we are getting information (req) 
// from the client
app.post("/create", async(req, res) => {
    const sel = new Seller({
    seller_picture: req.body.seller_picture,
    seller_name: req.body.seller_name,
    seller_website: req.body.seller_website,
    seller_email: req.body.seller_email,
    seller_phoneNumber: req.body.seller_phoneNumber,
    seller_address: req.body.seller_address,
    seller_summary: req.body.seller_summary,
    seller_partners: req.body.seller_partners,
    });
 
 // Adding record using save() method 
 // and replacing call back function with await
 try {
    const result = await sel.save(true);
    console.log(result);
    res.send("The seller with id " + result._id + "is inserted");
} catch (err) {
    console.log(err);}
});

app.post("/update", async(req, res) =>
{
    try 
    {
        const result = await Seller.findByIdAndUpdate(req.query.id, req.body);
        console.log(result);
    } 
    catch (err) 
    {
        console.log(err);
    }
});

app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:8080

    // If you see App is working means
    // backend working properly
});

app.get('/getUsers', (req, res) => {
    Seller.find()
    .then(sellers => res.json(sellers))
    .catch(err => res.json(err))
});

//Get user by ObjectID
app.get('/getUserByID', (req, res) => {
    Seller.findById(req.query.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

 //Server starts listening 
 app.listen(8080, function() {
    console.log("Server is listening at port 8080");
});

