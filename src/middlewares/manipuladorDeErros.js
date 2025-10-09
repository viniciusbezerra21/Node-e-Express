import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        return res.status(400).json({
            message: "Id invalido"
        });
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const mensagemErro = Object.values(erro.errors)
        .map((erro) => erro.message)
        .join("; ");
        
        return res.status(400).json({
            message: `Os seguintes erros foram encontrados: ${mensagemErro}`,
        });
    } else {
        return res.status(500).json({
            message: "Erro interno no servidor"
        });
    }
}

export default manipuladorDeErros;
