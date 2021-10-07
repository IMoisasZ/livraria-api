import express from 'express'
import LivroInfoController from '../controllers/livroInfo.controller.js'
import authPrivate from '../middlewares/authPrivate.js'
import authPublic from '../middlewares/authPublic.js'

const router = express.Router()

router.post('/', authPrivate, LivroInfoController.createLivroInfo)
router.put('/', authPrivate, LivroInfoController.updateLivroInfo)
router.get('/:livro_id', authPrivate, LivroInfoController.getLivroInfo)
router.delete('/:livro_id', authPrivate, LivroInfoController.deleteLivroInfo)

// avaliação
router.post('/:livro_id/avaliacao', authPublic, LivroInfoController.createAvaliacao)
router.delete('/:livro_id/avaliacao/:index', authPrivate, LivroInfoController.deleteAvaliacao)

export default router