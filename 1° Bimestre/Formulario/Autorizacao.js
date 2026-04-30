function carregar(){

    let dados = JSON.parse(localStorage.getItem("atleta"));

    // se não tiver dados
    if(!dados){
        alert("Nenhum dado encontrado!");
        window.location.href = "Formulario.html";
        return;
    }

    let categoria = "";

    // definição da categoria
    if(dados.idade <= 11){
        categoria = "Infantil";
    } 
    else if(dados.idade <= 13){
        categoria = "Pré-adolescente";
    } 
    else{
        categoria = "Adolescente";
    }

    // preenchendo os dados no HTML
    document.getElementById("resResponsavel").textContent = dados.responsavel;
    document.getElementById("resNome").textContent = dados.nome;
    document.getElementById("resCpf").textContent = dados.cpf;
    document.getElementById("resIdade").textContent = dados.idade;
    document.getElementById("resOrigem").textContent = dados.origem;
    document.getElementById("resDestino").textContent = dados.destino;
    document.getElementById("resModalidade").textContent = dados.modalidade;
    document.getElementById("resCategoria").textContent = categoria;
}

// botão voltar
function voltar(){
    window.location.href = "Formulario.html";
}

// executa quando a página carregar
window.onload = carregar;