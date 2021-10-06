import mongoose from 'mongoose'
import LivroInfoAvaliacaoSchema from './livroInfoAvaliacao.schema.js'

const LivroInfoSchema = new mongoose.Schema(
    {
        livro_id: Number,
        descricao: String,
        paginas: Number,
        editora: String,
        avaliacoes: [LivroInfoAvaliacaoSchema]
    },{ collection: 'livroInfo' }
)

export default LivroInfoSchema