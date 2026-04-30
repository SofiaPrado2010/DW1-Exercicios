function Validar(){
    let cpf = document.getElementById("inputCPF").value;
    let nome = document.getElementById("inputNome").value;
    let idade = parseInt(document.getElementById("inputIdade").value);
    let responsavel = document.getElementById("inputResponsavel").value;
    let origem = document.getElementById("inputOrigem").value;
    let destino = document.getElementById("inputDestino").value;
    let modalidade = document.getElementById("modalidade").value;

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");
    
    if(!cpf || !nome || !idade || !responsavel || !origem || !destino || !modalidade){
        footer.classList.add("erro");
        mensagem.innerHTML = "Todos os campos devem ser preenchidos";
        return;
    }
    if(idade < 7){
        footer.classList.add("erro");
        mensagem.innerHTML = "Não é permitida a participação de crianças com menos de 7 anos";
        return;
    }
    if(idade > 18){
        footer.classList.add("erro");
        mensagem.innerHTML = "Não é permitida a participação de maiores de 18 anos";
        return;
    }

    let dados = {
        nome,
        cpf,
        idade,
        responsavel,
        origem,
        destino,
        modalidade
    };

    localStorage.setItem("atleta", JSON.stringify(dados));
    window.location.href = "Autorizacao.html";
}