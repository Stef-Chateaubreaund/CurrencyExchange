document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;
//como sera que eu mudo isso pra outra conta
function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
// significar que e nao bom 
    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("Digite um valor válido!");
        return
        //define se e um numero ou tro 
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }
    //sera que vai dar certo

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}
//preciso aprender isso pra explicar
function clearForm(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}
//// do better :::: getElememnt by ID
/// do better ::: undertand conversor
