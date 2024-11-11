const express = require('express');
const Product = require('../models/product'); // Importando o modelo de produto

const router = express.Router();

// Endpoint para adicionar um produto
router.post('/', async (req, res) => {
    const { name } = req.body;
    const product = new Product({ name });
    try {
        await product.save();
        res.status(201).send(`Produto ${name} adicionado com sucesso!`);
    } catch (err) {
        res.status(400).send('Erro ao adicionar produto: ' + err.message);
    }
});

// Endpoint para buscar um produto
router.get('/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const product = await Product.findOne({ name });
        if (product) {
            res.status(200).send(`Produto encontrado: ${product.name}`);
        } else {
            res.status(404).send('Produto não encontrado');
        }
    } catch (err) {
        res.status(500).send('Erro ao buscar produto: ' + err.message);
    }
});

module.exports = router; // Exportando as rotas