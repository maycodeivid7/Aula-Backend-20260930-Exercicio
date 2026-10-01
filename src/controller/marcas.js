import ServiceMarcas from "../service/marcas.js";

class ControllerMarcas {

    ListarMarcas(req, res) {
        try {
            const marcas = ServiceMarcas.ListarMarcas();
            res.json( { marcas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    BuscarMarcaPorId(req, res) {
        try {
            const id = req.params.id;
            const marca = ServiceMarcas.BuscarMarcaPorId(id);
            res.json( { marca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    CadastrarMarca(req, res) {
        try {
            const marca = req.body.marca;
            const novaMarca = ServiceMarcas.CadastrarMarca(marca);
            res.status(201).json({ novaMarca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        } 
    }

    AtualizarMarca(req, res) {
        try {
            const id = req.params.id;
            const marcaAtualizada = req.body.marca;
            const marca = ServiceMarcas.AtualizarMarca(id, marcaAtualizada);
            res.json({ marca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    DeletarMarca(req, res) {
        try {
            const id = req.params.id;
            ServiceMarcas.DeletarMarca(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default new ControllerMarcas();