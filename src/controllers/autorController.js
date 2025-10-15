import NaoEncontrado from "../errors/NaoEncontrado.js";
import { autor } from "../models/Autor.js";

class autorController {

    static listarAutores = async (req, res,next) => {
        try {
            const autoresResultado = await autor.find();
            
            res.status(200).json(autoresResultado);
        } catch (erro) {
            next(erro);
        }
    };

    static cadastrarAutor = async (req, res, next) => {
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
            next(erro);
        }
    }

    static pegarAutorPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);

            if (autorEncontrado !== null) {
                res.status(200).json(autorEncontrado);
            } else {
                next(new NaoEncontrado("Id do autor nao encontrado"));
            }

        } catch (erro) {
            next(erro);
        }
    }
    static atualizarAutorPorID = async (req, res,next) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            if (autor !== null) {
                res.status(200).json({
                    message: "autor atualizado com sucesso"
                });
            } else {
                next(new NaoEncontrado("Id do autor nao encontrado"));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static DeletarAutorPorID = async (req, res,next) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            if (autor !== null) {
                res.status(200).json({
                    message: "autor deletado com sucesso"
                });
            } else {
                next(new NaoEncontrado("Id do autor nao encontrado"));
            }
        } catch (erro) {
            next(erro);
        }
    }



};

export default autorController;