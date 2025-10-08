import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";


class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao listar os livros`
            });
        }
    }

    static async cadastrarLivro(req, res) {
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
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar o livro`
            });
        }
    }

    static async pegarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao pegar o livro`
            });
        }
    }

    static async atualizarLivroPorID(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "livro atualizado com sucesso"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao atualizar o livro`
            });
        }
    }

    static async DeletarLivroPorID(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "livro deletado com sucesso"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao deletar o livro`
            });
        }
    }

    static async listarLivroPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
             res.status(500).json({
                message: `${erro.message} - falha ao listar os livros por editora`
            });
        }
    }

};

export default LivroController;