import express from 'express'
import LivroInfoController from '../controllers/livroInfo.controller.js'

const router = express.Router()

router.post('/',LivroInfoController.createLivroInfo)
router.put('/',LivroInfoController.updateLivroInfo)
router.delete('/:livro_id',LivroInfoController.deleteLivroInfo)

export default router