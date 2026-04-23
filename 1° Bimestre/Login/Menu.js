if(localStorage.getItem("logado") !== "true") {
    window.location.href = "Login.html";
}

function sair() {
    localStorage.removeItem("logado");
    window.location.href = "Login.html";
}