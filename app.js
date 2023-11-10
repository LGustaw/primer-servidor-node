const expres = require('express')

const app =  expres()

app.get('/', function(req, res){
    res.send('Hola mundo!!')

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