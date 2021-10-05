import express from 'express'
import LivroInfoController from '../controllers/livroInfo.controller.js'

const router = express.Router()

router.post('/',LivroInfoController.createLivroInfo)
router.put('/',LivroInfoController.updateLivroInfo)
router.get('/:livro_id', LivroInfoController.getLivroInfo)
router.delete('/:livro_id',LivroInfoController.deleteLivroInfo)

// avaliação
router.post('/:livro_id/avaliacao', LivroInfoController.createAvaliacao)
router.delete('/:livro_id/avaliacao/:index', LivroInfoController.deleteAvaliacao)

export default router