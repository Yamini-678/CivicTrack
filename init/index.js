const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderra";

main().then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDb = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj, 
        owner: "681afbd6d0bb5906506ee63c",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was intialized..");
};

initDb();