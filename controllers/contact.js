const express = require('express');
const router = express.Router();
const path = require('path');
const pathDir = require('../utils/path.js');

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
})
router.post('/contact',(req,res)=>{
    //console.log(req.body);
    res.sendFile(path.join(__dirname,'../','views','message.html'));
})
module.exports = router;