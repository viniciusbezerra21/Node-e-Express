import mongoose from "mongoose";
import ErrosBase from "../errors/ErroBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        return new RequisicaoIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        return new ErroValidacao(erro).enviarResposta(res);
    } else if (erro instanceof NaoEncontrado) {
        return erro.enviarResposta(res);
    } else {
        new ErrosBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;
