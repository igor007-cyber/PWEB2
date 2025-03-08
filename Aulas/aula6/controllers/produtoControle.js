// Aqui vai fazer os requisitos e as requisições
import Produto from "../models/produto.js";
import produtoRepositorio from "../repositories/produtoRepositorio.js";

export const getProdutoById = (req, res) => {
    const { id } = req.params;

    const produto = produtoRepositorio.getById(Number(id));

    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(produto);
};

export const listProduto = (req, res) => {
    const { categoria, page = 1, limit = 10 } = req.query;

    const produtos = produtoRepositorio.getAll();


    if (categoria) {
        produtos = produtos.filter(produto =>
            produto.getCategoria().toLowerCase() === categoria.toLowerCase()
        );
    }

    const start = (page - 1) * limit;
    const paginacaoProdutos = produtos.slice(start, start + parseInt(limit));

    res.json({ total: produtos.length, page, limit, data: paginacaoProdutos });
};

export const criarProduto = (req, res) => {
    const { nome, categoria, preco } = req.body;

    if (!nome || !categoria || !preco) {
        return res.status(400).json({ error: 'Nome, categoria e preço são obrigatórios' });
    }

    const newProduto = new Produto(null, nome, categoria, preco);
    const addedProduto = produtoRepositorio.add(newProduto);

    res.status(201).json(addedProduto);
};

export const updateProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, categoria, preco } = req.body;

    const updatedProduto = produtoRepositorio.update(id, { nome, categoria, preco });

    if (!updatedProduto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(updatedProduto);
};

export const deleteProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedProduto = produtoRepositorio.delete(id);

    if (!deletedProduto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(204).send();
};
