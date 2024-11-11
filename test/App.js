const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para interpretar JSON no corpo das requisições

const productTree = new BinaryTree();

// Rota para inserir um produto
app.post('/products', (req, res) => {
    const { name } = req.body;
    productTree.insert(name);
    res.status(201).send(`Produto ${name} inserido com sucesso!`);
});

// Rota para buscar um produto
app.get('/products/:name', (req, res) => {
    const { name } = req.params;
    const product = productTree.search(name);
    if (product) {
        res.status(200).send(`Produto encontrado: ${product.value}`);
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});