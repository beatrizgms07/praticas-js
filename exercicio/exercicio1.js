const livro = {
    titulo: "Verity",
    autor: "Collen",
    paginas: 300,

    resumo () {
        return `${this.titulo} foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;
    }
}

console.log(livro.resumo());