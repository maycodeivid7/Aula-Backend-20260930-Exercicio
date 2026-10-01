const marcas = new Array("Nike", "Adidas", "Puma", "Reebok", "Under Armour");

class Marcas {
    constructor() {
        this.marcas = marcas;
    }

    ListarMarcas() {
        return this.marcas;
    }

    BuscarMarcaPorId(id) {
        return this.marcas[id];
    }

    CadastrarMarca(marca) {
        this.marcas.push(marca);
        return marca;
    }

    AtualizarMarca(id, marcaAtualizada) {
        this.marcas[id] = marcaAtualizada;
        return marcaAtualizada;
    }

    DeletarMarca(id) {
        this.marcas.splice(id, 1);
    }
}

export default new Marcas();