function convertir(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value

    if(genero === "m"){
        let TMB = 10*peso + 6.25*altura - 5*edad +5;
        document.getElementById("resultado1").innerText = `Tu TMB es ${TMB.toFixed(2)} calorías/día`;
    }
    else if(genero === "f"){
        let TMB = 10*peso + 6.25*altura - 5*edad -161;
        document.getElementById("resultado1").innerText = `Tu TMB es ${TMB.toFixed(2)} calorías/día`;
    }       
}