var user=require("../public/javascripts/saveUser").user
var mongoose=require("mongoose");
const factorSchema = new mongoose.Schema({
    date: {
      type: Date,
      default: Date.now(),
      required: true,
      trim: true,
    },
    seller: {
      type: String,
      required: true,
      trim: true,
    },
    buyer: {
      type: String,
      required: true,
      trim: true,
    },
    
    product: {
      type: String,
      required: true,
      trim: true,
    },
    count: {
      type: String,
      required: true,
      trim: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  
  });
const factors = mongoose.model("factors", factorSchema);
module.exports={factors};