const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const vacancies = require("../Modeles/vacancy")



router.get('/vacancies', (req, res) => res.render('VanDataA'));
//router.get('/bbb', (req, res) => res.render('QRgenarater'));

router.post("/vacancies", async (req, res) => {
    const code = req.body.UserRegNo;
    console.log(code);
    if (!req.body.UserRegNo) {

      return res.status(400).send("Not all mandatory values have been set!");
    }
  
    try {
      let ItemToBeAdd = new vacancies({
        CompanyName: req.body.CompanyName,
        UserRegNo: req.body.UserRegNo,
        //stock: "true",
        vacDescription: req.body.vacDescription,
        count: req.body.count,
        salary: req.body.salary,
        contactNo: req.body.contactNo,
       // warranty:req.body.warranty,
        //likeCount: "20",
      });
  
      ItemToBeAdd = await ItemToBeAdd.save()
      .then(user => {
        req.flash(
          'success_msg',
          'New Vacancies Added to the System'
        );
        res.redirect('/newVacancies/vacancies'); 

      });
      res.send(ItemToBeAdd);
      //res.redirect('/dashboard'); 



      
    } catch (e) {
      return res.status(500).send(e.message);
    }
   // res.redirect('/dashboard'); 
  });

  module.exports = router;