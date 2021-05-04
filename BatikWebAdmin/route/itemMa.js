const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const ItemA = require("../Modeles/itemSchema")



router.get('/aaa', (req, res) => res.render('itemA'));
router.get('/bbb', (req, res) => res.render('QRgenarater'));

router.post("/aaa", async (req, res) => {
    const code = req.body.itemCode;
    console.log(code);
    if (!req.body.itemCode) {

      return res.status(400).send("Not all mandatory values have been set!");
    }
  
    try {
      let ItemToBeAdd = new ItemA({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        stock: "true",
        itemDescription: req.body.itemDescription,
        imgUrl: req.body.imgUrl,
        UserRegNo: req.body.UserRegNo,
        itemPrice: req.body.itemPrice,
       // warranty:req.body.warranty,
        likeCount: "20",
      });
  
      ItemToBeAdd = await ItemToBeAdd.save()
      .then(user => {
        req.flash(
          'success_msg',
          'New Item Added to the System'
        );
        res.redirect('/item/aaa'); 
      });
      res.send(ItemToBeAdd);
      //res.redirect('/dashboard'); 



      
    } catch (e) {
      return res.status(500).send(e.message);
    }
   // res.redirect('/dashboard'); 
  });

  module.exports = router;