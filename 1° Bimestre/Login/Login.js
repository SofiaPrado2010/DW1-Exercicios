function entrar(){
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(user === "admin" && senha === "123") {
        localStorage.setItem("logado", "true");

        window.location.href = "Menu.html";
    } else {
        alert("Login inválido!");
    }
}