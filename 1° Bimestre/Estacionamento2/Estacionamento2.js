function Calcular(){
    let checkin = document.getElementById("inputCheckin").value;
    let checkout = document.getElementById("inputCheckout").value;

    let veiculo = document.getElementById("veiculo").checked;
    let cliente = document.getElementById("inputCliente").checked;

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if(!checkin || !checkout){
        footer.classList.add("erro");
        mensagem.innerHTML = "Informe data e hora de entrada e saída";
        document.getElementById("resultado").innerHTML = "-";
        return;
    }

    let dataEntrada = new Date(checkin);
    let dataSaida = new Date(checkout);

    let diferenca = dataSaida - dataEntrada;
    let horas = diferenca / (1000 * 60 * 60);

    horas = Math.ceil(horas);

    if(horas <= 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "Data de saída inválida";
        document.getElementById("resultado").innerHTML = "-";
        return;
    }else{
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
    }

    let dias = Math.floor(horas / 24);
    let resto = horas % 24;

    let resp = dias * 60;

    if(resto > 0){
        let tarifa = 5 + (resto - 1) * 2.50;
        resp += tarifa;
    }

    if(cliente){
        resp = resp - (resp * 5/100);
    }

    if(veiculo){
        resp = resp + (resp * 25/100);
    }

    document.getElementById("resultado").innerHTML = horas + " hora(s) - R$ " + resp.toFixed(2);
}