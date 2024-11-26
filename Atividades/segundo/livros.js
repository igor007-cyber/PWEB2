import {Material} from './Material';

 export class Livro extends Material {
    _isbn = undefined;
    _editora = undefined;

    constructor(isbn, edtiora,autor, data_publicacao, categoria) {
        super(categoria, autor, data_publicacao);
        this._isbn = isbn;
        this._editora = editora;
    }

    get getIsbn() {
        return this._isbn;
    }

    get getEditora() {
        return this._editora;
    }

    set setIsbn(isbn) {
        this._isbn = isbn;
    }

    set setEditora(editora) {
        this._editora = editora;
    }

    static toString() {
        return `Livro[isbn: ${this._isbn}, 
                editora: ${this._editora}, 
                autor: ${super.getAutor},
                data_publicacao: ${super.getDataPublicacao},
                categoria: ${super.getCategoria()},
                ${super.toString()}`;
    }

    editarLivro(isbn, edtiora,autor, data_publicacao, categoria) {
        super.setAutor(autor);
        super.setDataPublicacao(data_publicacao);
        super.setCategoria(categoria);
        this.setIsbn(isbn);
        this.setEditora(editora);
    }

}
