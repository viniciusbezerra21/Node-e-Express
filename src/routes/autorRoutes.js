import express from 'express';
import autorController from '../controllers/autorController.js';

const routes = express.Router();

routes.get("/autores", autorController.listarAutores);
routes.get("/autores/:id", autorController.pegarAutorPorId);
routes.post("/autores", autorController.cadastrarAutor);
routes.put("/autores/:id", autorController.atualizarAutorPorID);
routes.delete("/autores/:id", autorController.DeletarAutorPorID);

export default routes;