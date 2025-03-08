import Produto from "../models/produto.js"; // Certifique-se de adicionar .js

class ProdutoRepositorio {
    constructor() {
        this.produto = [
            new Produto(1, 'laptop', 'eletrolux', 2000),
            new Produto(2, 'notebook', 'eletrolux', 1500),
            new Produto(3, 'mouse', 'eletrolux', 50),
            new Produto(4, 'teclado', 'eletrolux', 100),
        ];
    }

    getAll() {
        console.log(this.produto);
        return this.produto;
    }

    getById(id) {
        return this.produto.find(produto => produto.id === id);
    }

    add(produto) {
        const id = this.produto.length + 1;
        produto.id = id;
        this.produto.push(produto);
        return produto;
    }

    update(id, updatedData) {
        const produto = this.getById(id);
        if (!produto) return null;

        if (updatedData.nome) produto.nome = updatedData.nome;
        if (updatedData.categoria) produto.categoria = updatedData.categoria;
        if (updatedData.preco) produto.preco = updatedData.preco;

        return produto;
    }

    delete(id) {
        const index = this.produto.findIndex(produto => produto.id === id); // Alterado para 'produto.id'
        if (index === -1) return null;

        return this.produto.splice(index, 1)[0];
    }
}

export default new ProdutoRepositorio();
