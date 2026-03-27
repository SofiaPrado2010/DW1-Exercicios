function Calcular(){
    let peso = parseFloat(document.getElementById("inputPeso").value);
    let altura = parseFloat(document.getElementById("inputAltura").value);

    let imc = peso / (altura * altura);
    let i = imc.toFixed(2);

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if(peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)){
        footer.classList.add("erro");
        mensagem.innerHTML = "Por favor, digite números válidos";
        document.getElementById("respImc").innerHTML = "-";
    } else {
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
        document.getElementById("respImc").innerHTML = i;
        
        if(imc < 18.5){
        mensagem.innerHTML = "Abaixo do Peso";
        document.getElementById("respImc").innerHTML = i;
        } else if(imc <= 24.9){
        mensagem.innerHTML = "Peso Normal";
        document.getElementById("respImc").innerHTML = i;
        } else if(imc <= 29.9){
        mensagem.innerHTML = "Sobrepeso";
        document.getElementById("respImc").innerHTML = i;
        } else if(imc <= 34.9){
        mensagem.innerHTML = "Obesidade Grau I";
        document.getElementById("respImc").innerHTML = i;
        } else if(imc <= 39.9){
        mensagem.innerHTML = "Obesidade Grau II";
        document.getElementById("respImc").innerHTML = i;
        } else {
        mensagem.innerHTML = "Obesidade III";
        document.getElementById("respImc").innerHTML = i;
        }
    }
}
