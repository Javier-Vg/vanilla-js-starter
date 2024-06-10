//Se extrae el archivo, que es "index.js"
const calcularOperacion = require("../src/index.js");

//toBe es el resultado que espera la operacion
//En el "expect" se debe de poner entre parentesis a la funcion con sus respectivos parametros para enviarlos a la funcion del archivo js "calculador"
test('descripcion1', () => {
    expect(calcularOperacion("suma",1,3)).toBe(4);//Todo Ok || salio mal
});

test('descripcion2', () => {
    expect(calcularOperacion("restar",5,3)).toBe(2);//Todo Ok || salio mal
});

test('descripcion3', () => {
   expect(calcularOperacion("multiplicar",1,3)).toBe(3);//Todo Ok || salio mal
});

test('descripcion4', () => {
    expect(calcularOperacion("division",10,2)).toBe(5);//Todo Ok || salio mal
});
