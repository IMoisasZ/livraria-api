import mongoose from "mongoose"

const LivroInfoAvaliacaoSchema = new mongoose.Schema(
    {
        nome: String,
        nota: Number,
        avaliacao: String
    },{ collection: 'livroInfo' }
)

export default LivroInfoAvaliacaoSchema