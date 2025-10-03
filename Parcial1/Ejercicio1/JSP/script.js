function convertir(){
    let temperatura = document.getElementById("temp").value;
    let unidad = document.getElementById("tipo").value;

    if(unidad === "c"){
        let fahrenheit = (temperatura - 32) * 5/9;
        document.getElementById("resultado1").innerText = `${temperatura}°F son ${fahrenheit.toFixed(2)}°C`;
    }
    else if(unidad === "f"){
        let celsius = (temperatura * 9/5) + 32;
        document.getElementById("resultado1").innerText = `${temperatura}°C son ${celsius.toFixed(2)}°F`;
    }       
}