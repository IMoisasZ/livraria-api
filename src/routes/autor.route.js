import { Router } from 'express'
import AutorController from '../controllers/autor.controller.js'
import authPrivate from '../middlewares/authPrivate.js'

const router = Router()

router.post('/', authPrivate, AutorController.createAutor)
router.put('/', authPrivate, AutorController.updateAutor)
router.delete('/:id', authPrivate, AutorController.deleteAutor)
router.get('/', authPrivate, AutorController.getAutores)
router.get('/:id', authPrivate, AutorController.getAutor)

export default router
