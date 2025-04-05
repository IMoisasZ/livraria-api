import { Router } from 'express'
import LivroController from '../controllers/livro.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'

const router = Router()

router.post('/', authPrivate, LivroController.createLivro)
router.put('/', authPrivate, LivroController.updateLivro)
router.delete('/:id', authPrivate, LivroController.deleteLivro)
router.get('/:id', authPublic, LivroController.getLivro)
router.get('/', authPublic, LivroController.getLivros)

export default router
