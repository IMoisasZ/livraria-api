import express from 'express'
import AutorController from '../controllers/autor.controller.js'
import author from '../middlewares/auth.js'

const router = express.Router()

router.post('/', AutorController.createAutor)
router.put('/', AutorController.updateAutor)
router.delete('/:autor_id', AutorController.deleteAutor)
router.get('/',AutorController.getAutores)
router.get('/:autor_id', AutorController.getAutor)

export default router