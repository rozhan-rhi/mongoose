const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/rozhan");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  factors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "factorModel",
    },
  ],
});
const user = mongoose.model("user", userSchema);
const newUser=new user({
  name:"bahar",
  phone:"7868990",
  address:"qazvin",
  email:"dfg@yahoo.com",
  image:"./my_pic.jpg",
})
newUser.save()
const factorSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
    required: true,
    trim: true,
  },
  username: {
    type: String,
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
const factorModel = mongoose.model("factorModel", factorSchema);
const newFactor = new factorModel({
  user_id: newUser._id,
  username: "fruit",
  seller: "tehran",
  buyer: "rasht",
  count: 2,
});
newFactor.save();
async function findUser() {
  const doc = await user.find().populate("factors");
  console.log(doc);
}
findUser();

