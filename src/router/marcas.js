import express from "express";

import ControllerMarcas from "../controller/marcas.js";

const router = express.Router();

router.get("/buscar", ControllerMarcas.listarMarcas);
router.get("/buscar/:id", ControllerMarcas.buscarMarcaPorId);
router.post("/cadastrar", ControllerMarcas.cadastrarMarca);
router.put("/atualizar/:id", ControllerMarcas.atualizarMarca);
router.delete("/deletar/:id", ControllerMarcas.deletarMarca);

export default router;