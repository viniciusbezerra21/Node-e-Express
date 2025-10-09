import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static listarLivros = async (req, res, next) => {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            next(erro);
        }
    }

    static cadastrarLivro = async (req, res, next) => {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {
                ...novoLivro, autor: {
                    ...autorEncontrado._doc
                }
            };
            const livroCadastrado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "cadastrado com sucesso",
                livro: livroCadastrado
            });
        } catch (erro) {
            next(erro);
        }
    }

    static pegarLivroPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            next(erro);
        }
    }

    static atualizarLivroPorID  = async (req, res, next) => {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "livro atualizado com sucesso"
            });
        } catch (erro) {
            next(erro);
        }
    }

    static DeletarLivroPorID = async (req, res, next) => {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "livro deletado com sucesso"
            });
        } catch (erro) {
            next(erro);
        }
    }

    static listarLivroPorEditora = async (req, res, next) => {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            next(erro);
        }
    }

};

export default LivroController;