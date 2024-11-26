export class Material {
    _autor = undefined;
    _data_pulicacao = undefined;
    _categoria = undefined;

    constructor(autor, data_publicacao, categoria) {
        this._autor = autor;
        this._data_pulicacao = data_publicacao;
        this._categoria = categoria;
    }

    get getAutor() {
        return this._autor;
    }

    get getDataPublicacao() {
        return this._data_pulicacao;
    }

    get getCategoria() {
        return this._categoria;
    }

    set setAutor(autor) {
        this._autor = autor;
    }

    set setDataPublicacao(data_publicacao) {
        this._data_pulicacao = data_publicacao;
    }

    set setCategoria(categoria) {
        this._categoria = categoria;
    }
}
