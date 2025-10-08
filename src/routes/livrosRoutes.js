import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.pegarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroPorID);
routes.delete("/livros/:id", LivroController.DeletarLivroPorID);

export default routes;