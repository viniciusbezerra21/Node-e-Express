import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
        type: String,
        required: [true, "O título do livro é obrigatório"]
    },
    editora: {
        type: String,
        required: [true, "A editora é obrigatória"],
        enum: {
            values: ["Casa do Código", "Alura"],
            message: "A editora {VALUE} nao é um valor permitido"
        }
    },
    preco: { type: Number },
    paginas: {
        type: Number,
        validate: {
            validator: (valor) => {
                return valor >= 10 && valor <= 5000
            }, message: "O número de páginas deve estar entre 10 e 5000. valor informado: {VALUE}"
        }
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: [true, "O autor é obrigatório"]
    }

}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export { livro, livroSchema };