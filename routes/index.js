const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  try{
    let datos = fs.readFileSync('./datos/datos.json')
  
    if(datos != ''){
      console.log(datos)
    }else{
      console.log('no hay datos')
    }
  }catch(e){
    console.log(e)
  }
});

module.exports = router;
