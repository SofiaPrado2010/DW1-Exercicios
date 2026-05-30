const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.use(express.json());

// Middleware CORS
// Permite que o navegador acesse o servidor
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'POST, GET, OPTIONS'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );
    next();
});

// ---------------------------------------------------
// ROTA PRINCIPAL
// ---------------------------------------------------

// Esta rota:
// 1) Recebe o nome da peça
// 2) Verifica o estoque
// 3) Retorna a situação

app.post('/enviar-dados', function (req, res) {
    try {
        // Dados recebidos do formulário
        const peca = req.body.peca;

        if (!peca) {
            return res.status(400).json({
                erro: 'O nome da peça é obrigatório.'
            });
        }

        let p = peca.toUpperCase();
        let estoque = [
            "MOTOR",
            "PNEU",
            "AMORTECEDOR",
            "FILTRO DE ÓLEO",
            "CORREIA"
        ];
        
        let resposta = '';
        if(estoque.includes(p)){
            resposta = 'Peça em estoque';
        } else{
            resposta = 'Peça não encontrada no sistema';
        }


        // -----------------------------------------
        // EXIBE NO TERMINAL ONDE O SERVIDOR ESTÁ RODANDO
        // -----------------------------------------

        console.log('--------------------------------');
        console.log('Nome da Peça:', peca);
        console.log('Resposta:', resposta);

        // -----------------------------------------
        // RESPOSTA PARA O CLIENTE
        // -----------------------------------------

        res.json({
            mensagem: 'Dados processados com sucesso!',
            cliente: {
                peca: peca,
                resposta: resposta
            }
        });

    } catch (erro) {
        console.log('Erro:', erro);
        res.status(500).json({
            erro: 'Erro interno do servidor.'
        });
    }
}
);


function obterIP() { // FUNÇÃO PARA OBTER O IP DA MÁQUINA
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family === 'IPv4' && !info.internal) {
                return info.address;
            }
        }
    }
    return 'localhost';
}

const ip = obterIP();

// ---------------------------------------------------
// INICIA O SERVIDOR
// ---------------------------------------------------

app.listen(port, '0.0.0.0', function () {
    console.log(`Servidor rodando em http://${ip}:${port}`);
});