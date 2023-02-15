const express = require('express');
const router = express.Router();
const fs =require('fs')

/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.render('form')
});

router.post('/recoger', function(req, res, next) {
  let datos = req.body

  let { titulo, imagen, descripcion } = req.body

  if( titulo == '' || imagen == '' || descripcion == ''){
    res.render('error',{message: "Ups...", error:{"status":404, "stack":"Campos en vacío"}})
  }else{
    let insertar = { titulo, imagen, descripcion }

    console.log(insertar)

    fs.readFile('./datos/datos.json',"utf-8", (err,data) => {
      if(err){
        console.log('Error: ', err)
      }else{
        console.log('JSON: ', data)
      }

      if(data != ''){
        data = JSON.parse(data)
        console.log("data parseada a json :",data[0])
        data.push(insertar)
        console.log('añadido')

      }else{
        data = []
        data.push(insertar)
        console.log('vacio')
      }

      fs.writeFileSync("./datos/datos.json",JSON.stringify(data))
    })
  }
  res.redirect('/form')
})
module.exports = router;
