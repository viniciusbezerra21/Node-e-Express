import livro from "../models/Livro.js";

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
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "cadastrado com sucesso",
                livro: novoLivro
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



};

export default LivroController;