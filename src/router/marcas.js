import express from "express";

import ControllerMarcas from "../controller/marcas.js";

const router = express.Router();

router.get("/listarmarcas", ControllerMarcas.ListarMarcas);
router.get("/buscarmarcaporid/:id", ControllerMarcas.BuscarMarcaPorId);
router.post("/cadastrarmarca", ControllerMarcas.CadastrarMarca);
router.put("/atualizarmarca/:id", ControllerMarcas.AtualizarMarca);
router.delete("/deletarmarca/:id", ControllerMarcas.DeletarMarca);

export default router;