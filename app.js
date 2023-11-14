const express = require('express')
//Ejecutar un midewer es decir funcion que se ejecuta antes de ingresar a cada ruta
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const app =  express()

app.use(express.json())

app.get('/', function(req, res){
    
    res.send('Hola mundo!!!!')
})

app.post('/imagen', upload.single('imagen'), function(req, res){
    const body = req.body
    const imagen = req.file

    console.log(imagen)
    res.send('Hola mundo desde el POST')
})

app.listen(3000)

/* Declarar funciones
function suma(a, b) {
    //Cuerpo-logica
    return a + b
}
    //Llamar
suma(3, 5)
*/