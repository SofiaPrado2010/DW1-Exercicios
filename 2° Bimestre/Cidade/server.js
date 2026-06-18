const express = require('express');
const os = require('os');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configuração do pool de conexão com PostgreSQL
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS (Verificação de origem da Servidorina)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rota Única: Enviar e Receber Mensagens (POST)
app.post('/api/mensagens', async (req, res) => {
    try {
        const mensagemRecebida = req.body.mensagem;

        if (!mensagemRecebida) {
            return res.status(400).json({ status: "erro", mensagem: "Bilhete vazio!" });
        }

        const agora = new Date();
        const dataHora = `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR')}`;
        console.log(`Bilhete recebido: ${mensagemRecebida} - ${dataHora}`);

        // REGRA 1: Se for "listar"
        if (mensagemRecebida === "listar") {
            try {
                const query = "SELECT * FROM cidade";
                const result = await pool.query(query);

                let mensagemResposta = "Cidades: \n";

                result.rows.forEach(cidade => {
                    mensagemResposta += `${cidade.id_cidade}: ${cidade.nome_cidade}\n`;
                });

                return res.status(200).json({
                    status: "sucesso",
                    mensagem: mensagemResposta
                });

            } catch (erro) {
                console.log("ERRO:");
                console.log(erro);
                return res.status(500).json({
                    status: "erro",
                    mensagem: "Erro ao consultar as cidades"
                });
            }
        }

        else if (mensagemRecebida === "estados") {
            try {
                const query = "SELECT c.nome_cidade, e.nome_estado FROM cidade c INNER JOIN estado e ON(c.sigla_estado = e.sigla_estado)";
                const result = await pool.query(query);

                let mensagemResposta = "Lista: \n";

                result.rows.forEach(item => {
                    mensagemResposta += `${item.nome_cidade}: ${item.nome_estado}\n`;
                });

                return res.status(200).json({
                    status: "sucesso",
                    mensagem: mensagemResposta
                });

            } catch (erro) {
                return res.status(500).json({
                    status: "erro",
                    mensagem: "Erro ao consultar as cidades e estados"
                });
            }
        }

        else {
            try {
                const query = "SELECT id_cidade, nome_cidade FROM cidade WHERE UPPER(nome_cidade) = UPPER('" + mensagemRecebida + "')";
                const result = await pool.query(query);

                if (result.rows.length > 0) {
                    return res.status(200).json({
                        status: "sucesso",
                        mensagem:
                            `id: ${result.rows[0].id_cidade}
                            Cidade: ${result.rows[0].nome_cidade}`
                    });

                } else {

                    return res.status(200).json({
                        status: "sucesso",
                        mensagem: "mensagem não entendida"
                    });

                }

            } catch (erro) {

                console.log(erro);

                return res.status(500).json({
                    status: "erro",
                    mensagem: "Erro ao consultar cidade"
                });

            }
        }

    } catch (error) {
        console.error('Erro ao processar mensagem:', error);
        res.status(500).json({ status: "erro", mensagem: 'Erro interno do Servidor' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor na porta ${port}`);
    console.log(`Rota disponível:`);
    console.log(`  POST http://localhost:${port}/api/mensagens - Enviar Mensagens`);
    console.log(`\nMensagens disponíveis (possíveis)`);
    console.log(`  "listar"     -> Lista das cidades`);
    console.log(`  "nome de uma cidade" -> Retorna o id e nome da cidade`);
    console.log(`  "estados" -> Lista de cidades e estados`);
    console.log(`  (outras)   -> Mensagem não entendida`);
});