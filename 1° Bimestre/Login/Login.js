function entrar(){
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem")

    if(user === "admin" && senha === "123"){
        window.open("menu.html", "_blank"); 
    } else {
        footer.classList.add("erro");
        mensagem.innerHTML = "Usuário ou senha incorretos";
    }
}