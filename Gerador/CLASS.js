function letraMaiuscula(nom) {
    return nom[0].toUpperCase() + nom.substring(1, nom.length)
}
function Class() {
    let nom = document.getElementById("inputClass").value;
    let nome = letraMaiuscula(nom)
    let a = document.getElementById("inputclass").value;
    let atributo = a.split(", ");
    let aux = "";
    for (let i = 0; i < atributo.length; i++) {
        aux += "this." + atributo[i] + " = " + atributo[i] + ";\n"
    }
    let r = "class " + nome +
        "{\nconstructor(" + a + ", posicaoNaLista" + "){\n"
        + aux + "\nthis.posicaoNaLista = posicaoNaLista" + "\n}\n}"
    document.getElementById("codigo").textContent = r;
}