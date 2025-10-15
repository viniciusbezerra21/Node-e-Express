import ErrosBase from "./ErroBase.js";

class NaoEncontrado extends ErrosBase {
    constructor(mensagem = "Pagina nao Encontrada") {
        super(mensagem, 404)
    }
}

export default NaoEncontrado;