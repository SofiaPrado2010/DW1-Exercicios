function letraMaiuscula(nom) {
    return nom[0].toUpperCase() + nom.substring(1, nom.length)
}
function Visualisar() {
    let a = document.getElementById("inputHtml").value;
    let nom = document.getElementById("inputClass").value;
    let nome = letraMaiuscula(nom)
    let aux = "";
    let atributo = a.split(", ");
    for (let i = 1; i < atributo.length; i++) {
        aux += "<label for = \"input" + atributo[i] + "\">" + atributo[i]
            + "</label>\n<input type=\"...\" name=\"input" + atributo[i] + "\" id=\"input" + atributo[i] + "\">\n\n" + "<br>"
    }
    let f = "\n<label for=\"input" + atributo[0] + "\">" + atributo[0] + "</label>" +
        "\n<input type=\"number\" name=\"input" + atributo[0] + "\" id=\"input" + atributo[0] + "\">"
    let c = "<!DOCTYPE html>\n<html lang=en>\n<head>\n<meta charset=UTF-8>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Document</title>\n</head>\n<body>\n"
    let d = "\n</body>\n</html>"
    let botoes = "\n<input type=\"button\" value=\"Procure\" id=\"btProcure\" onclick=\"procure()\" style=\"display:inline;\">\n<input type=\"button\" value=\"Inserir\" id=\"btInserir\" onclick=\"inserir()\" style=\"display:none;\">\n" +
        "<input type=\"button\" value=\"Alterar\" id=\"btAlterar\" onclick=\"alterar()\" style=\"display:none;\">\n<input type=\"button\" value=\"Excluir\" id=\"btExcluir\" onclick=\"excluir()\" style=\"display:none;\">\n<br>\n"
    let boot = "<div id=\"divAviso\" style=\"background-color: antiquewhite;\"></div>\n<br>\n<input type=\"button\" value=\"Salvar\" id=\"btSalvar\" onclick=\"salvar()\" style=\"display:none;\">\n<input type=\"button\" value=\"Cancelar\" id=\"btCancelar\" onclick=\"cancelarOperacao()\" style=\"display:none;\">\n<br>\n<input type=\"button\" value=\"Listar\" onclick=\"listar()\"><br>\n<div id=\"outputSaida\" style=\"background-color: aqua;\">...</div>" +
        "\n\n<input type=\"button\" value=\"Persistir\" id=\"btPersisitir\" onclick=\"prepararESalvarCSV()\">\n<input type=\"button\" value=\"Recuperar\" id=\"btRecuperar\" onclick=\"abrirArquivoSalvoEmLocalPermanente()\">"
    let e = "\n<script src=\"./" + nome + ".js\"></script>\n<script src=\"./" + nome + "Controle.js\"></script>"
    document.getElementById("codigo").textContent = c + f + botoes + aux + boot + e + d
}