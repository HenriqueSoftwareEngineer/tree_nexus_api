// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

// Carregar variáveis de ambiente
dotenv.config();

// Middleware para interpretar o corpo das requisições em JSON
app.use(express.json());

// Conectar ao banco de dados MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB: ", err));

// Definir as rotas da API (por exemplo, /node)
const nodeRoutes = require('./src/routes/nodeRoutes');
app.use('/api/nodes', nodeRoutes);

// Iniciar o servidor na porta definida ou 3000 por padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
