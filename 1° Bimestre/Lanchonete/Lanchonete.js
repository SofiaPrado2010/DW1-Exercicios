function Calcular(){
    let cqbasico = parseFloat(document.getElementById("inputCQBasico").value)|| 0;
    let cqduplo = parseFloat(document.getElementById("inputCQDuplo").value)|| 0;
    let xs = parseFloat(document.getElementById("inputXS").value)|| 0;
    let refri = parseFloat(document.getElementById("inputRefri").value)|| 0;
    let r1 = parseFloat(document.getElementById("inputR1").value)|| 0;

    let footer = document.getElementById("footer");
    let mensagem  = document.getElementById("mensagem");


    if(cqbasico < 0 || cqduplo < 0 || xs < 0 || refri < 0 || r1 < 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "As quantidades não podem ser negativas";
        document.getElementById("total").innerHTML = "-";
        return;
    }
    
    if(!Number.isInteger(cqbasico) || !Number.isInteger(cqduplo) || !Number.isInteger(xs) || !Number.isInteger(refri) ||
    !Number.isInteger(r1)){
        footer.classList.add("erro");
        mensagem.innerHTML = "Digite apenas números inteiros (sem decimais)";
        document.getElementById("total").innerHTML = "-";
        return;
    }

    let total = (cqbasico * 22) + (cqduplo * 26) + (xs * 29) + (refri * 5) + (r1 * 8);

    footer.classList.remove("erro");
    mensagem.innerHTML = "Cálculo realizado com sucesso";

    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2);
}