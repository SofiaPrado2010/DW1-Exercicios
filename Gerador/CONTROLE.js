function Controlar() {
    let nome = document.getElementById("inputClass").value;
    let nom = letraMaiuscula(nome)
    let a = document.getElementById("inputHtml").value;
    let ac = document.getElementById("inputclass").value;
    let atri = a.split(", ");
    let actri = ac.split(", ")
    let list = "lista" + nom;
    let obj = nome;
    let identi = "input" + atri[0];
    let dados = "mostrarDados" + nom;
    let aux1 = ""
    for (let i = 1; i < atri.length; i++) {
        aux1 += " \n    const " + actri[i] + "= document.getElementById(\"input" + atri[i] + "\").value;\n"
    }
    let aux2 = ""
    for (let i = 0; i < atri.length; i++) {
        aux2 += actri[i] + " && ";
    }
    aux2 = aux2.substring(0, aux2.length - 3)
    let aux3 = ""
    for (let i = 0; i < atri.length; i++) {
        aux3 += "linha." + actri[i] + " + " + "\" - \"" + " + " + "\n"
    }
    let aux33 = aux3 + "\"<br>\"";
    let aux4 = ""
    for (let i = 0; i < atri.length; i++) {
        aux4 += " \ndocument.getElementById(\"input" + atri[i] + "\").value=" + obj + "." + actri[i]
    }
    let aux5 = ""
    for (let i = 1; i < atri.length; i++) {
        aux5 += " \n     document.getElementById(\"input" + atri[i] + "\").value=" + "\"\""
    }
    let aux6 = ""
    for (let i = 1; i < atri.length; i++) {
        aux6 += " \n     document.getElementById(\"input" + atri[i] + "\").readOnly=" + "soLeitura"
    }
    let aux66 = " \ndocument.getElementById(\"input" + atri[0] + "\").readOnly=" + "!soLeitura" + aux6

    let aux7 = ""
    for (let i = 0; i < actri.length; i++) {
        aux7 += "linha." + actri[i] + " + " + "\";\"" + "+"
    }
    let aux77 = aux7 + "fimDeLinha";

    let aux8 = ""
    for (let i = 0; i < atri.length; i++) {
        aux8 += "                                  " + actri[i] + ":" + "dados[" + i + "],\n"
    }
    function letraMaiuscula() {
        return nome[0].toUpperCase() + nome.substring(1, nome.length)
    }
    document.getElementById("codigo").textContent =
        "let " + list + " = []; \n" +
        "let oQueEstaFazendo = \'\'; \n" +
        "let " + obj + " = null; \n" +
        "bloquearAtributos(true);\n\n" +

        "function procurePorChavePrimaria(chave) {\n" +
        "    for (let i = 0; i < " + list + ".length; i++) {\n" +
        "        const " + obj + " = " + list + "[i];\n" +
        "        if (" + obj + "." + actri[0] + " == chave) {\n" +
        "      " + obj + ".posicaoNaLista = i;\n" +
        "        return" + " " + list + "[i];\n" +
        "        } \n" +
        "    }\n" +
        "return null;\n" +
        "}\n\n" +

        "function procure() {\n" +
        "   const " + actri[0] + "= document.getElementById(\"" + identi + "\").value;\n" +
        "   if (isNaN(" + actri[0] + ") || !Number.isInteger(Number(" + actri[0] + "))) {\n" +
        "       mostrarAviso(\"Precisa ser um número inteiro\");\n" +
        "       document.getElementById(\"" + identi + "\").focus();\n" +
        "       return;\n" +
        "   }\n\n" +
        "   if (" + actri[0] + ") { \n" +
        "      " + obj + " = procurePorChavePrimaria(" + actri[0] + ");\n" +
        "       if (" + obj + ") { \n" +
        "            " + dados + "(" + obj + "); \n" +
        "             visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none');  \n" +
        "             mostrarAviso(\"Achou na lista, pode alterar ou excluir\"); \n" +
        "       } else {  \n" +
        "            limparAtributos();\n" +
        "            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');\n" +
        "            mostrarAviso(\"Não achou na lista, pode inserir\");\n" +
        "       } \n" +
        "   } else {\n" +
        "       document.getElementById(\"" + identi + "\").focus(); \n" +
        "       return;\n" +
        "   }\n" +
        "}\n\n" +
        "function inserir() {\n" +
        "    bloquearAtributos(false);\n" +
        "    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');  \n" +
        "    oQueEstaFazendo = 'inserindo'; \n" +
        "    mostrarAviso(\"INSERINDO - Digite os atributos e clic o botão salvar\");\n" +
        "    document.getElementById(\"" + identi + "\").focus();\n" +
        "}\n\n" +
        "function alterar() { \n" +
        "    bloquearAtributos(false);\n" +
        "    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');\n" +
        "    oQueEstaFazendo = 'alterando';\n" +
        "    mostrarAviso(\"ALTERANDO - Digite os atributos e clic o botão salvar\");\n" +
        "}\n\n" +
        "function excluir() {\n" +
        "    bloquearAtributos(false);\n" +
        "    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); \n" +
        "    oQueEstaFazendo = 'excluindo';\n" +
        "    mostrarAviso(\"EXCLUINDO - clic o botão salvar para confirmar a exclusão\");\n" +
        "}\n\n" +
        "function salvar() {\n\n" +
        "    let " + actri[0] + ";\n" +
        "    if (" + obj + " == null) {\n" +
        "       " + actri[0] + " = parseInt(document.getElementById(\"" + identi + "\").value);\n" +
        "    } else {\n" +
        "       " + actri[0] + " = " + obj + "." + actri[0] + ";\n}\n\n" +
        aux1 +
        "    if(" + aux2 + ") {\n" +
        "       switch (oQueEstaFazendo) {\n" +
        "           case \'inserindo\':\n" +
        "              " + obj + " = new " + nom + "(" + ac + ");\n" +
        "              " + list + ".push(" + obj + ");\n" +
        "               mostrarAviso(\"Inserido na lista\")\n" +
        "               break;\n" +
        "           case \'alterando\':\n" +
        "              " + obj + "Alterado = new " + nom + "(" + ac + ");\n" +
        "              " + list + "[" + obj + ".posicaoNaLista] = " + obj + "Alterado;\n" +
        "               mostrarAviso(\"Alterado\");\n" +
        "               break;\n" +
        "           case \'excluindo\':\n" +
        "               let novalista = [];\n" +
        "               for (let i = 0; i<" + list + ".length; i++) {\n" +
        "                   if (" + obj + ".posicaoNaLista!= i) {\n" +
        "                       novalista.push(" + list + "[i]);\n" +
        "                   }\n" +
        "               }\n" +
        "              " + list + " = novalista;\n" +
        "               mostrarAviso(\"EXCLUIDO\");\n" +
        "               break;\n" +
        "           default:\n" +
        "               mostrarAviso(\"Erro aleatório\")\n" +
        "       }" +
        "       visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');\n" +
        "       limparAtributos();\n" +
        "       listar();\n" +
        "       document.getElementById(\"" + identi + "\").focus();\n" +
        "   } else {\n" +
        "       alert(\"Erro nos dados digitados\");\n" +
        "       return;\n" +
        "   }\n" +
        "}\n" +
        "function preparaListagem(vetor) {\n" +
        "    let texto = \"\";\n" +
        "    for (let i = 0; i < vetor.length; i++) {\n" +
        "        const linha = vetor[i];\n" +
        "        texto+= \n" +
        "           " + aux33 + ";\n" +
        "    }\n" +
        "    return texto;\n" +
        "}\n" +
        "function listar() {\n" +
        "    document.getElementById(\"outputSaida\").innerHTML = preparaListagem(" + list + ");\n" +
        "}\n" +
        "function cancelarOperacao() {\n" +
        "    limparAtributos();\n" +
        "    bloquearAtributos(true);\n" +
        "    visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');\n" +
        "    mostrarAviso(\"Cancelou a operação de edição\");\n}\n" +
        "function mostrarAviso(mensagem) {\n" +
        "    document.getElementById(\"divAviso\").innerHTML = mensagem;\n}\n" +
        "function " + dados + "(" + obj + ") {\n" +
        "   " + aux4 + "\n\n" +
        "    bloquearAtributos(true);\n" +
        "}\n" +
        "function limparAtributos(){\n" +
        aux5 + "\n\n" +
        "    bloquearAtributos(true);\n" +
        "}" +
        "function bloquearAtributos(soLeitura) {\n" +
        aux66 + "\n" +
        "}\n" +
        "function visibilidadeDosBotoes(btProcure, btInserir, btAlterar, btExcluir, btSalvar) {\n" +
        "    document.getElementById(\"btProcure\").style.display = btProcure;\n" +
        "    document.getElementById(\"btInserir\").style.display = btInserir;\n" +
        "    document.getElementById(\"btAlterar\").style.display = btAlterar;\n" +
        "    document.getElementById(\"btExcluir\").style.display = btExcluir;\n" +
        "    document.getElementById(\"btSalvar\").style.display = btSalvar;\n" +
        "    document.getElementById(\"btCancelar\").style.display = btSalvar;\n" +
        "    document.getElementById(\"" + identi + "\").focus();\n" +
        "}\n\n" +
        "function persistirEmLocalPermanente(arquivoDestino, conteudo) {\n" +
        "    const blob = new Blob([conteudo], { type: 'text/plain' });\n" +
        "    const link = document.createElement('a');\n" +
        "    link.href = URL.createObjectURL(blob);\n" +
        "    link.download = arquivoDestino;\n" +
        "    link.click();\n" +
        "    URL.revokeObjectURL(link.href);\n" +
        "}\n\n" +
        "function abrirArquivoSalvoEmLocalPermanente() {\n\n" +
        "    const input = document.createElement('input');\n" +
        "    input.type = 'file';\n" +
        "    input.accept = '.csv';\n" +
        "    input.onchange = function (event) {\n" +
        "        const arquivo = event.target.files[0];\n" +
        "        console.log(arquivo.name);\n" +
        "        if (arquivo) {\n" +
        "           converterDeCSVparaListaObjeto(arquivo);\n" +
        "        }\n" +
        "   }\n" +
        "   input.click();\n" +
        "}\n\n" +
        "function prepararESalvarCSV() {\n" +
        "    let nomeDoArquivoDestino = \"./" + nom + ".csv;\"\n" +
        "    let textoCSV = \"\";\n" +
        "    for (let i = 0; i <" + list + ".length; i++) {\n" +
        "        const linha = " + list + "[i];\n" +
        "        textoCSV +=" + aux77 + "\n" +
        "    }\n" +
        "persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);\n" +
        "}\n" +
        "function converterDeCSVparaListaObjeto(arquivo) {\n" +
        "    const leitor = new FileReader();\n" +
        "    leitor.onload = function (e) {\n" +
        "          const conteudo = e.target.result;\n" +
        "          const linhas = conteudo.split('fimDeLinha');\n" +
        "          " + list + " = [];\n" +
        "          for (let i = 0; i < linhas.length; i++) {\n" +
        "              const linha = linhas[i].trim();\n" +
        "              if (linha) {\n" +
        "                  const dados = linha.split(';');\n" +
        "                  if (dados.length ===" + actri.length + ") {\n" +
        "                     " + list + ".push({\n" +
        aux8 + "});\n" +
        "                      }\n" +
        "                  }\n" +
        "              }\n" +
        "              listar();\n" +
        "           };\n" +
        "           leitor.readAsText(arquivo);\n" +
        "}"
}