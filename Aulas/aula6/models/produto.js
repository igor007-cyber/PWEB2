class Produto {
    #id;
    #nome;
    #preco;
    #categoria;

    constructor(id, nome, categoria, preco) {
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get categoria() {
        return this._categoria; // CORRIGIDO
    }

    set categoria(value) {
        this._categoria = value;
    }

    get preco() {
        return this._preco; // CORRIGIDO
    }

    set preco(value) {
        this._preco = value;
    }
}

export default Produto;
