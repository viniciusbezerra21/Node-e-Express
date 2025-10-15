import ErrosBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErrosBase {
    constructor(mensagem = "Um ou mais dados fornecidos estao incorretos") {
        

        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;