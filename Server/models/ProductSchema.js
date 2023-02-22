const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    img : {
        type : Array,
        required : true
    },
    desc : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type: ObjectId,
        ref: "Category",
    },
    rating : {
        type : Number,
        required : true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Products", productSchema)