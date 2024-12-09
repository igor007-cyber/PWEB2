export class Artigo{
   #isbn
   #editora
   constructor(Isbn,Editora){
      this.#editora = Editora;
      this.#isbn = Isbn;
   }

   get editora(){
      return this.#editora;
   }

   get isbn(){
      return this.#isbn;
   }

   set isbn(Novoisbn){
      if (Novoisbn.trim() === "") {
         console.error("Nome não pode ser vazio.");
     } else {
         this.#isbn = Novoisbn;
     }
   }

   exipirLivro(){
      console.log(`ISBN: ${this.#isbn}, Editora: ${this.#editora}`);
   }

   editarLivro(Novoisbn, NovaEditora) {
      if (Novoisbn.trim() !== "" && NovaEditora.trim() !== "") {
        this.#isbn = Novoisbn;
        this.#editora = NovaEditora;
        console.log("Livro atualizado com sucesso!");
      } else {
        console.error("ISBN e Editora não podem ser vazios.");
      }
    }
}