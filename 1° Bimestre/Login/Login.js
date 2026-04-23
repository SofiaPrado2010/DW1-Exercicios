function entrar(){
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(user === "Admin" && senha === "1234") {
        localStorage.setItem("logado", "true");

        window.open("Menu.html", "_blank"); 
    } else {
        footer.classList.add("erro");
        mensagem.innerHTML = "Senha ou usuário invalidos";
    }
}