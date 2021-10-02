import express from "express";
import LivroController from '../controllers/livro.controller.js'

const router = express.Router()

router.post('/', LivroController.createLivro)
router.put('/', LivroController.updateLivro)
router.delete('/:livro_id', LivroController.deleteLivro)
router.get('/:livro_id', LivroController.getLivro)
router.get('/', LivroController.getLivros)
router.get('/?autor_id', LivroController.getLivros)

export default router