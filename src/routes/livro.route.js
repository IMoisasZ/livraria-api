import express from "express";
import LivroController from '../controllers/livro.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'

const router = express.Router()

router.post('/', authPrivate, LivroController.createLivro)
router.put('/', authPrivate, LivroController.updateLivro)
router.delete('/:livro_id', authPrivate, LivroController.deleteLivro)
router.get('/:livro_id', authPublic, LivroController.getLivro)
router.get('/', authPublic, LivroController.getLivros)
router.get('/?autor_id', authPublic, LivroController.getLivros)

export default router