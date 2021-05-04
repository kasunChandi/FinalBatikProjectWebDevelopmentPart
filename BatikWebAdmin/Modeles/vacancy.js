const mongoose = require("mongoose");

const VanSchema = new mongoose.Schema({

    CompanyName: {
        type: String,
        required: true,
      },
      UserRegNo: {
        type: String,
        required: true,
      },
      count:{
        type: Number,
        required: true,
      },
      vacDescription: {
        type: String,
        maxlength: 300,
        required: true,
      },
      salary: {
        type: String,
        required :true
      },
      contactNo: {
        type: String,
        required: true,
      }
     /*  /* itemQty: {
        type: Number,
        required: true,
      }, 
      stock: {
        type: String,
        required: true,
      },
      likeCount: 
      {
        type: Number,
        required: true,
      } */
});

const VanDataA = mongoose.model("vacancies" , VanSchema);
module.exports = VanDataA;