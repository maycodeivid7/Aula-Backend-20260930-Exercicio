import Marcas from '../model/marcas.js';

class ServiceMarcas {

    ListarMarcas() {
        return Marcas.ListarMarcas();
    }

    BuscarMarcaPorId(id) {
        return Marcas.BuscarMarcaPorId(id);
    }

    CadastrarMarca(marca) {
        return Marcas.CadastrarMarca(marca);
    }

    AtualizarMarca(id, marcaAtualizada) {
        return Marcas.AtualizarMarca(id, marcaAtualizada);
    }

    DeletarMarca(id) {
        return Marcas.DeletarMarca(id);
    }

}

export default new ServiceMarcas();