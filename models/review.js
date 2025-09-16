const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    comment : String,
    created_at : {
        type : Date,
        default : Date.now(),
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});

module.exports = mongoose.model("Review", reviewSchema);