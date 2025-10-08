import { autor } from "../models/Autor.js";

class autorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find();
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao listar os autores`
            });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create({
                nome: req.body.nome,
                nascionalidade: req.body.nascionalidade
            });
            res.status(201).json({
                message: "cadastrado com sucesso",
                autor: novoAutor,

            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar o autor`
            });
        }
    }

    static async pegarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao pegar o autor`
            });
        }
    }

    static async atualizarAutorPorID(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "autor atualizado com sucesso"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao atualizar o autor`
            });
        }
    }

    static async DeletarAutorPorID(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: "autor deletado com sucesso"
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao deletar o autor`
            });
        }
    }



};

export default autorController;