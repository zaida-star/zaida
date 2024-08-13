/*function suma(a,b){
    resultado = a+b;
    alert(resultado);
}
suma(6,15);
function suma(){
    let a = parseInt(prompt("Ingrese el primer número: "))
    let b = parseInt(prompt("Ingrese el segundo número: "))
    resultado = a + b;
    alert(resultado);
}
suma();*/

function sumar(){
    let a = parseInt(document.getElementById("numero1").value)
    let b = parseInt(document.getElementById("numero2").value)
    resultado = a + b;
    let texto = "";
    texto = "<h2>" + resultado + "</h2>";
    document.getElementById("resultado").innerHTML = texto;
    return resultado;
}

function dividir(){
    let a = parseInt(document.getElementById("numero1").value)
    let b = parseInt(document.getElementById("numero2").value)
    if(b == 0){
        alert("No se puede dividir entre 0");
    }else{
        resultado = a/b;
        let texto = "";
        texto = "<h2>" + resultado + "</h2>";
        document.getElementById("resultado").innerHTML = texto;
        return resultado;
    }
}

function multiplicar(){
    let a = parseInt(document.getElementById("numero1").value)
    let b = parseInt(document.getElementById("numero2").value)
    resultado = a * b;
    let texto = "";
    texto = "<h2>" + resultado + "</h2>";
    document.getElementById("resultado").innerHTML = texto;
    return resultado;
}

function restar(){
    let a = parseInt(document.getElementById("numero1").value)
    let b = parseInt(document.getElementById("numero2").value)
    resultado = a - b;
    let texto = "";
    texto = "<h2>" + resultado + "</h2>";
    document.getElementById("resultado").innerHTML = texto;
    return resultado;
}

document.getElementById("suma").addEventListener("click",function(){sumar()})
document.getElementById("resta").addEventListener("click",function(){restar()})
document.getElementById("multiplica").addEventListener("click",function(){multiplicar()})
document.getElementById("divide").addEventListener("click",function(){dividir()})

