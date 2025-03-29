const mongoose = require("mongoose");
require("dotenv").config();



const connectMongoDB = () => {
  try {
   MONGODB_URI="mongodb+srv://hosteladmin:hosteladmin@hostelcluster.o2wyc.mongodb.net/?retryWrites=true&w=majority"

    mongoose.connect(MONGODB_URI);
    console.log("Successfully Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectMongoDB;
