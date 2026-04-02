function Calcular(){
    let ra = parseInt(document.getElementById("inputRA").value);
    let nome = document.getElementById("inputNome").value;
    let n1 = parseFloat(document.getElementById("inputN1").value);
    let n2 = parseFloat(document.getElementById("inputN2").value);
    let n3 = parseFloat(document.getElementById("inputN3").value);
    let n4 = parseFloat(document.getElementById("inputN4").value);
    let me = parseFloat(document.getElementById("inputME").value);
    
    let media = (n1 + n2 * 2 + n3 * 3 + n4 * 4 + me)/11;
    let ma = media.toFixed(2);
    let situacao = "";
    let conceito = "";
  
    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if(isNaN(ra)){
        footer.classList.add("erro");
        mensagem.innerHTML = "O Ra deve ser preenchido com números";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else if(nome == ""){
        footer.classList.add("erro");
        mensagem.innerHTML = "Preencer o campo do nome";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else if(isNaN(n1) || n1 < 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "A nota 1 deve ser preenchida com um número maior que 0";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else if(isNaN(n2) || n2 < 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "A nota 2 deve ser preenchida com um número maior que 0";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else if(isNaN(n3) || n3 < 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "A nota 3 deve ser preenchida com um número maior que 0";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else if(isNaN(n4) || n4 < 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "A nota 4 deve ser preenchiada com um número maior que 0";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else if(me < 0 || isNaN(me)){
        footer.classList.add("erro");
        mensagem.innerHTML = "A média de exercícios deve ser preenchida com um número maior que 0";
        document.getElementById("resposta").innerHTML = "-";
        return;
    }else{
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
    }
    

        if(ma >= 9){
            conceito = "A";
            situacao = "Aprovado";
        } else if(ma >= 7.5){
            conceito = "B";
            situacao = "Aprovado";
        } else if(ma >= 6){
            conceito = "C";
            situacao = "Aprovado";
        } else if(ma >= 4){
            conceito = "D";
            situacao = "Reprovado";
        } else {
            conceito = "E";
            situacao = "Reprovado";
        }

        let resp = ra + " - " + nome + " - " + n1 + " - " + n2 + " - " + n3 + " - " + n4 + " - " + me + 
        " - " + ma + " - " + conceito + " - " + situacao;

        document.getElementById("resposta").innerHTML = resp;
    }