function Calcular(){
    let horas = parseInt(document.getElementById("inputHoras").value);
    let veiculo = document.getElementById("veiculo").checked;
    let cliente = document.getElementById("inputCliente").checked;

    let tarifa = 5 + (horas - 1 ) * 2.50;

    let resp = tarifa;
    if(cliente){
        resp = resp - (resp * 5/100);
    }
    if(veiculo){
        resp = resp + (resp * 25/100);
    }
    document.getElementById("resultado").innerHTML = resp.toFixed(2);
}