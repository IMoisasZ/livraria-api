import express from 'express'
import AutorController from '../controllers/autor.controller.js'
import authPrivate from '../middlewares/authPrivate.js'

const router = express.Router()

router.post('/', authPrivate, AutorController.createAutor)
router.put('/', authPrivate, AutorController.updateAutor)
router.delete('/:autor_id', authPrivate, AutorController.deleteAutor)
router.get('/', authPrivate, AutorController.getAutores)
router.get('/:autor_id', authPrivate, AutorController.getAutor)

export default router