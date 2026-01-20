function mostrarAlerta() {
    alert("HOLA BIENVENIDO AL SITIO WEB");
    console.info("ejemplo de funcion");
}
function suma(){
    let valor1 = 5;
    let valor2 = 10;
    let resultado = valor1 + valor2;
    console.info("el resultado de la suma es"+ resultado);
}
function sumaParam (valor1,valor2){
    console.info("el valor 1"+valor1);
    console.info("el valor 2"+valor2);
}
function sumarInput(){
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    let res = parseFloat(val1)+parseFloat(val2);
    console.info("el resultado de la suma es: "+ res);
    if(res>10){
        document.getElementById("mensaje").value="numero mayor a 10";

    }else{
        document.getElementById("mensaje").value="numero menor";
    }
}


let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    pantalla.value += valor;
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}

function borrar() {
    pantalla.value = "";
}


