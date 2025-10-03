function dividir(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let nombre = document.getElementById("nombre").value;
    let resultado = num1 / (num2*num2);
    alert(nombre + " tu IMC es: " + resultado);
}