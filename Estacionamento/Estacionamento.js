function Calcular(){
    let horas = parseInt(document.getElementById("inputHoras").value);
    let veiculo = document.getElementById("veiculo").checked;
    let cliente = document.getElementById("inputCliente").checked;

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    let tarifa = 5 + (horas - 1 ) * 2.50;
    if(isNaN(horas)){
        footer.classList.add("erro");
        mensagem.innerHTML = "As quantidade de horas deve ser informada";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else{
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
    }

    let resp = tarifa;
    if(horas == 24){
        resp = 60;
    }else{
        resp = tarifa;
    }
    if(cliente){
        resp = resp - (resp * 5/100);
    }
    if(veiculo){
        resp = resp + (resp * 25/100);
    }
    document.getElementById("resultado").innerHTML = resp.toFixed(2);
}