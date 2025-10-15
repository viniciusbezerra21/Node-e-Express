class ErrosBase extends Error {
    constructor(menagem = "Erro interno no servidor", status = 500) {
        super();
        this.message = menagem;
        this.status = status;
    }

    enviarResposta(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        });
    }
}

export default ErrosBase;